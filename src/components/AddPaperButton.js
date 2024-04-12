import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function AddPaperButton({ setPapers }) {
  // State variables
  const [show, setShow] = useState(false); // Controls the visibility of the modal
  const [paperInfo, setPaperInfo] = useState({
    // Stores the information entered by the user
    shortName: '',
    title: '',
    authors: '',
    journal: '',
    year: '',
    previewURL: '',
  });

  // Event handlers
  const handleClose = () => setShow(false); // Closes the modal
  const handleShow = () => setShow(true); // Shows the modal

  const handleInputChange = (e) => {
    // Updates the paperInfo state when the user enters information in the form inputs
    const { name, value } = e.target;
    setPaperInfo({ ...paperInfo, [name]: value });
  };

  const handleAddPaper = () => {
    // Adds the paper to the list of papers and closes the modal
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
      {/* Button to open the modal */}
      <Button variant="primary" onClick={handleShow}>
        Add Paper
      </Button>

      {/* Modal */}
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Paper Info</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Form inputs for paper information */}
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
          {/* Buttons to cancel or add the paper */}
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
