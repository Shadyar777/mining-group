import { FC } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { styled } from '@mui/material';

import 'react-pdf/dist/esm/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const StyledPDFViewer = styled('div')(() => ({
  width: '100%',
  overflow: 'hidden',
  position: 'relative',

  canvas: {
    width: '100% !important',
    height: '100% !important',
  },
}));

type PDFViewerProps = {
  pdfURL: string;
};

const PDFViewer: FC<PDFViewerProps> = ({ pdfURL }) => {
  return (
    <StyledPDFViewer>
      <Document file={pdfURL}>
        <Page pageNumber={1} />
      </Document>
    </StyledPDFViewer>
  );
};

export default PDFViewer;
