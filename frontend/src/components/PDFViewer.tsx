import React from "react";
import { Document, Page, pdfjs } from "react-pdf";

// Set the correct path to the worker file
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.4.168/pdf.worker.min.mjs`;

function PDFViewer({ fileUrl }: { fileUrl: string }) {
  return (
    <div>
      <Document file={fileUrl}>
        <Page pageNumber={1} />
      </Document>
    </div>
  );
}

export default PDFViewer;
