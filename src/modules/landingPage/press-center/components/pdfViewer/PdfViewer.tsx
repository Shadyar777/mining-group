import { FC } from 'react';
import { Document, Page } from 'react-pdf';

import 'react-pdf/dist/esm/Page/TextLayer.css';
import { styled } from '@mui/material';

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
