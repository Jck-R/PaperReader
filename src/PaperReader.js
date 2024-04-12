import { useState } from 'react';
import Dashboard from './components/Dashboard';
import Preview from './components/Preview';
import './PaperReader.css';

function PaperReader() {
  const [currentPreviewPaper, setCurrentPreviewPaper] = useState(null);

  return (
    <main>
      <Dashboard setCurrentPreviewPaper={setCurrentPreviewPaper} />
      <Preview currentPaper={currentPreviewPaper} />
    </main>
  );
}

export default PaperReader;