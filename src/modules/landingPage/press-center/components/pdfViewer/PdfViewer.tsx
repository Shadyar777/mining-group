import { Document, Page, pdfjs } from 'react-pdf';
import { FC, useState } from 'react';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

type PDFViewerProps = {
  pdfURL: string;
};

const PDFViewer: FC<PDFViewerProps> = ({ pdfURL }) => {
  const [numPages, setNumPages] = useState<number | null>(null);

  return (
    <div
      style={{
        width: '100%',
        height: '600px',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <Document
        file={pdfURL}
        onLoadSuccess={({ numPages }) => setNumPages(numPages)}
      >
        {Array.from(new Array(numPages || 0), (_, index) => (
          <Page key={`page_${index + 1}`} pageNumber={index + 1} scale={1.0} />
        ))}
      </Document>
      <div style={{ position: 'absolute', bottom: '10px', right: '10px' }}>
        {/*<Button variant='contained' color='primary' href={pdfURL} download>*/}
        {/*  Скачать PDF*/}
        {/*</Button>*/}
      </div>
    </div>
  );
};

export default PDFViewer;
