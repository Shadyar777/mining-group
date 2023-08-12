import { styled } from '@mui/material';
import PressCenterTitle from '../components/pressCenterPage/PressCenterTitle.tsx';
// import PdfViewer from '../components/pdfViewer/PdfViewer.tsx';
import Slider from '../components/slider/Slider.tsx';

const StyledPressCenterPage = styled('div')(({ theme: { breakpoints } }) => ({
  display: 'flex',
  flexDirection: 'column',

  [breakpoints.down('sm')]: {},
  [breakpoints.down('mobileSm')]: {},
}));

const PressCenterPage = () => {
  return (
    <StyledPressCenterPage>
      <PressCenterTitle />
      {/*<PdfViewer />*/}
      <Slider />
    </StyledPressCenterPage>
  );
};

export default PressCenterPage;
