import React, { useState, useEffect } from "react";
import { Form, FormControl, Toast, Button, ButtonGroup } from 'react-bootstrap';
import PaperCard from "./PaperCard";
import AddPaperButton from "./AddPaperButton";
import Note from "./Note";
import examplePapers from "../examplePapers";

function Dashboard({ setCurrentPreviewPaper }) {
    const [papers, setPapers] = useState(() => {
        const savedPapers = localStorage.getItem("papers");
        if (savedPapers) {
            return JSON.parse(savedPapers);
        } else {
            return examplePapers;
        }
    });
    const [searchTerm, setSearchTerm] = useState("");
    const [currentNotePaperName, setCurrentNotePaperName] = useState(null);
    const [showSuccessToast, setShowSuccessToast] = useState(false);

    const filteredPapers = papers.filter(paper => {
        const paperStr = Object.values(paper).join("").toLowerCase();
        return paperStr.includes(searchTerm.toLowerCase());
    });

    const handleSearchChange = event => {
        setSearchTerm(event.target.value);
    };

    const handleNoteChange = () => {
        const note = document.querySelector(".note").value;
        const updatedPapers = papers.map(paper => {
            if (paper.shortName === currentNotePaperName) {
                if (!paper.notes) {
                    paper.notes = [];
                }
                paper.notes.unshift(note);
            }
            return paper;
        });
        setPapers(updatedPapers);
        setShowSuccessToast(true);
    };

    const removePaper = paper => {
        if (currentNotePaperName === paper.shortName) {
            setCurrentNotePaperName(null);
        }
        if (setCurrentPreviewPaper && currentNotePaperName === paper.shortName) {
            setCurrentPreviewPaper(null);
        }
        setPapers(papers.filter(p => p !== paper));
    };

    useEffect(() => {
        const note = document.querySelector(".note");
        const paper = papers.find(paper => paper.shortName === currentNotePaperName)
        if (note && paper) {
            note.value = paper.notes[0] || "";
        }
    }, [currentNotePaperName, papers]);

    useEffect(() => {
        localStorage.setItem("papers", JSON.stringify(papers));
    }, [papers]);

    const importPapers = () => {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = '.json';
        input.onchange = e => {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.onload = e => {
                const data = JSON.parse(e.target.result);
                setPapers(data);
            };
            reader.readAsText(file);
        };
        input.click();
    }

    const exportPapers = () => {
        const data = JSON.stringify(papers);
        const blob = new Blob([data], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'papers.json';
        a.click();
        URL.revokeObjectURL(url);
    }

    return (
        <div className="dashboard">
            <h2>Paper Reader</h2>
            <hr />
            <div className="d-flex justify-content-between align-items-center">
                <AddPaperButton setPapers={setPapers} />
                <ButtonGroup aria-label="Basic example">
                <Button variant="secondary" onClick={importPapers}>Import</Button>
                <Button variant="secondary" onClick={exportPapers}>Export</Button>
                </ButtonGroup>
                <Form>
                    <FormControl
                        type="text"
                        placeholder="Search..."
                        className="mr-sm-2"
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                </Form>
            </div>
            <hr />
            <Note currentNotePaperName={currentNotePaperName} papers={papers} handleNoteChange={handleNoteChange} />
            <div className="center">
                <Toast show={showSuccessToast} onClose={() => setShowSuccessToast(false)} delay={2000} autohide>
                    <Toast.Body>Successfully saved the note!</Toast.Body>
                </Toast>
            </div>
            <div className="paper-cards">
                {filteredPapers.map((paper, index) => (
                    <PaperCard key={index} paper={paper} setCurrentPreviewPaper={setCurrentPreviewPaper} removePaper={removePaper} setCurrentNotePaperName={setCurrentNotePaperName} />
                ))}
            </div>
        </div>
    );
}

export default Dashboard;
