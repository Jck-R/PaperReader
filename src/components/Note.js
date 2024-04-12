import React, { useState } from 'react';
import { Button, ButtonGroup, Modal } from 'react-bootstrap';

function Note({ currentNotePaperName, papers, handleNoteChange }) {
    // Get the title of the current note paper
    const title = currentNotePaperName === null ? null : papers.find(paper => paper.shortName === currentNotePaperName).title;
    // State to store the change log modal
    const [changeLog, setChangeLog] = useState(null);

    // Function to show the note change log modal
    const showNoteLog = () => {
        // Find the paper with the current note paper name
        const paper = papers.find(paper => paper.shortName === currentNotePaperName);
        if (paper.notes) {
            // Set the change log modal content
            setChangeLog(
                <Modal show={true} onHide={() => setChangeLog(null)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Note Change Log</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <ul>
                            {paper.notes.map((note, i) => (
                                <li key={i}>{note}</li>
                            ))}
                        </ul>
                    </Modal.Body>
                </Modal>
            );
        }
    }

    return (
        <div className={currentNotePaperName === null ? 'center hidden' : 'center'}>
            <h3>Notepad</h3>
            {title}
            <textarea
                className="note"
                rows="10"
                placeholder="Add a note..."
            ></textarea>
            <span>
                <ButtonGroup aria-label="Basic example">
                    <Button variant="success" onClick={handleNoteChange}>Save Note</Button>
                    <Button variant="secondary" onClick={showNoteLog}>Change Log </Button>
                </ButtonGroup>
            </span>
            {changeLog}
        </div>
    );
}

export default Note;
