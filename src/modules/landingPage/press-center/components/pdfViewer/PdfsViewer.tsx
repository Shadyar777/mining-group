import { FC, useState } from 'react';
import { Document, Page } from 'react-pdf';

import 'react-pdf/dist/esm/Page/TextLayer.css';
import { styled } from '@mui/material';

const StyledPdfsViewer = styled('div')(() => ({
  width: '100%',
  // height: '600px',
  overflow: 'hidden',
  position: 'relative',

  canvas: {
    width: '100% !important',
    height: '100% !important',
  },
}));

type PdfsViewerProps = {
  pdfURL: string;
};

const PdfsViewer: FC<PdfsViewerProps> = ({ pdfURL }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  return (
    <StyledPdfsViewer>
      <>
        <Document file={pdfURL} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} />
        </Document>
        <div>
          <p>
            Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
          </p>
          <button
            type='button'
            disabled={pageNumber <= 1}
            onClick={previousPage}
          >
            Previous
          </button>
          <button
            type='button'
            disabled={pageNumber >= (numPages ?? 0)}
            onClick={nextPage}
          >
            Next
          </button>
        </div>
      </>
    </StyledPdfsViewer>
  );
};

export default PdfsViewer;
