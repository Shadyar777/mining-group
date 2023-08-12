// import { useState } from 'react';
// import { Document, Page } from 'react-pdf';
//
// import { Container, styled } from '@mui/material';
//
// const StyledPdfViewer = styled('div')(({ theme: { breakpoints } }) => ({
//   [breakpoints.down('sm')]: {},
//   [breakpoints.down('mobileSm')]: {},
// }));
//
// function PdfViewer() {
//   // const [numPages, setNumPages] = useState(null);
//   // const [pdfUrl, setPdfUrl] = useState<string | null>(null);
//   //
//   // useEffect(() => {
//   //   // Запрос к вашему серверу для получения PDF
//   //   fetch(
//   //     'https://cors-anywhere.herokuapp.com/http://localhost:4000/pdf/sample.pdf',
//   //   )
//   //     .then((response) => {
//   //       console.log(response);
//   //       return response.blob();
//   //     })
//   //     .then((blob) => {
//   //       const url = URL.createObjectURL(blob);
//   //       setPdfUrl(url);
//   //     })
//   //     .catch((error) => {
//   //       console.error('There was an error fetching the PDF', error);
//   //     });
//   // }, []);
//   //
//   // function onDocumentLoadSuccess({ numPages }) {
//   //   setNumPages(numPages);
//   // }
//
//   // if (!pdfUrl) return 'Загрузка...';
//
//   return (
//     <StyledPdfViewer>
//       <Container maxWidth='md'>
//         {/*<Document file={samplePdf} onLoadSuccess={onDocumentLoadSuccess}>*/}
//         {/*  {Array.from(new Array(numPages), (_, index) => (*/}
//         {/*    <Page key={`page_${index + 1}`} pageNumber={index + 1} />*/}
//         {/*  ))}*/}
//         {/*</Document>*/}
//         pdf
//       </Container>
//     </StyledPdfViewer>
//   );
// }
//
// export default PdfViewer;
