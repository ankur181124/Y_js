import React, { useState } from "react";
import FileUpload from "./components/FileUpload";
import PDFViewer from "./components/PDFViewer";
import CommentInput from "./components/CommentInput";
import CommentList from "./components/CommentList";
import TextEditor from "./components/TextEditor";

function App() {
  const [fileUrl, setFileUrl] = useState<string | null>(null);

  const addComment = (text: string, tags: string[]) => {
    // Add to Yjs shared comments
  };

  return (
    <div>
      <h1>Collaborative Document Editor</h1>
      {!fileUrl ? (
        <FileUpload onFileUpload={setFileUrl} />
      ) : (
        <>
          <PDFViewer fileUrl={fileUrl} />
          <CommentInput onAddComment={addComment} />
          <CommentList />
          <TextEditor />
        </>
      )}
    </div>
  );
}

export default App;
