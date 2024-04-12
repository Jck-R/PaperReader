import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

// PaperCard component
function PaperCard({ paper, setCurrentPreviewPaper, removePaper, setCurrentNotePaperName}) {
  return (
    <Card style={{ width: '16rem' }}>
      <Card.Body className='paper-card-body'>
        <div>
          {/* Display the short name of the paper */}
          <Card.Title>{paper.shortName}</Card.Title>
          {/* Display the title of the paper */}
          <Card.Text>{paper.title}</Card.Text>
          {/* Display the journal and year of the paper */}
          <Card.Text><em>{paper.journal} {paper.year}</em></Card.Text>
          {/* Display the authors of the paper */}
          <Card.Text>{paper.authors}</Card.Text>
        </div>
        <br />
        <div>
          {/* Button to preview the paper */}
          <Button variant="outline-secondary" size="sm" onClick={() => setCurrentPreviewPaper(paper)}>Preview</Button>
          {/* Button to set the current note paper name */}
          <Button variant="outline-info" size="sm" onClick={() => setCurrentNotePaperName(paper.shortName)} style={{ margin: '0 0.2rem' }}>Note</Button>
          {/* Button to remove the paper */}
          <Button variant="outline-danger" size="sm" onClick={() => removePaper(paper)}>Remove</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default PaperCard;
