import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function AddPaperButton({ setPapers }) {
  const [show, setShow] = useState(false);
  const [paperInfo, setPaperInfo] = useState({
    shortName: '',
    title: '',
    authors: '',
    journal: '',
    year: '',
    previewURL: '',
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaperInfo({ ...paperInfo, [name]: value });
  };

  const handleAddPaper = () => {
    // Add paper to the list of papers
    setPapers((papers) => {
      return [
        ...papers,
        {
          shortName: paperInfo.shortName,
          title: paperInfo.title,
          authors: paperInfo.authors,
          journal: paperInfo.journal,
          year: paperInfo.year,
          previewURL: paperInfo.previewURL,
        },
      ];
    });
    handleClose();
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Paper
      </Button>

      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Paper Info</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Some paper information inputs, including: Paper short name; paper title; authors; journal; year; Preview URL */}
          <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Paper Short Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter paper short name"
                name="shortName"
                value={paperInfo.shortName}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicTitle">
              <Form.Label>Paper Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter paper title"
                name="title"
                value={paperInfo.title}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicAuthors">
              <Form.Label>Authors</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter authors"
                name="authors"
                value={paperInfo.authors}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicJournal">
              <Form.Label>Journal</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter journal"
                name="journal"
                value={paperInfo.journal}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicYear">
              <Form.Label>Year</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter year"
                name="year"
                value={paperInfo.year}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPreviewURL">
              <Form.Label>Preview URL</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter preview URL"
                name="previewURL"
                value={paperInfo.previewURL}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="success" onClick={handleAddPaper}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddPaperButton;
