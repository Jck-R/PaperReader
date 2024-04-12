function Preview({ currentPaper }) {
    // Check if currentPaper is not available
    if (!currentPaper) {
        return (
            <div className="preview">
                <p>Select a paper to preview</p>
            </div>
        );
    }

    // Log whether the currentPaper's previewURL matches a specific URL
    console.log(currentPaper.previewURL === "https://academic.oup.com/bioinformatics/article-pdf/34/1/139/49043482/bioinformatics_34_1_139.pdf");

    // Render the paper preview
    return (
        <div className="preview">
            <iframe src={currentPaper.previewURL} width="100%" height="100%" title="Paper Preview"></iframe>
        </div>
    );
}

export default Preview;