import React, { useState } from "react";

function FileUpload({ onFileUpload }: { onFileUpload: (filePath: string) => void }) {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch("http://localhost:3000/upload", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    onFileUpload(data.filePath);
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={!file}>Upload</button>
    </div>
  );
}

export default FileUpload;
