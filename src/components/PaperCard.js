import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function PaperCard({ paper, setCurrentPreviewPaper, removePaper, setCurrentNotePaperName}) {
  return (
    <Card style={{ width: '16rem' }}>
      <Card.Body className='paper-card-body'>
        <div>
          <Card.Title>{paper.shortName}</Card.Title>
          <Card.Text>{paper.title}</Card.Text>
        </div>
        <br />
        <div>
          <Button variant="outline-secondary" size="sm" onClick={() => setCurrentPreviewPaper(paper)}>Preview</Button>
          <Button variant="outline-info" size="sm" onClick={() => setCurrentNotePaperName(paper.shortName)} style={{ margin: '0 0.2rem' }}>Note</Button>
          <Button variant="outline-danger" size="sm" onClick={() => removePaper(paper)}>Remove</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default PaperCard;
