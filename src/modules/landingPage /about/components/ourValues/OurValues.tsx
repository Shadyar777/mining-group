import {
  Container,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import OurValuesMobileCarousel from './OurValuesMobileCarousel.tsx';
import OurValuesDesktop from './OurValuesDesktop.tsx';
// import {lazy} from "react";
// const LazyActivityMobileCarousel = lazy(() => import('./OurValuesMobileCarousel.tsx'));

export const StyledOurValues = styled('div')(({ theme: { breakpoints } }) => ({
  '& .ourValues__container': {
    display: 'flex',
    flexDirection: 'column',
    gap: '30px',
  },
  '& .ourValues__title': {
    color: '#392C0B',
    textAlign: 'center',
  },
  [breakpoints.down('mobileSm')]: {
    '& .ourValues__title': {
      fontSize: '24px',
    },
  },
  // '& .ourValues__content': {
  //   display: 'flex',
  //   flexWrap: 'wrap',
  //   gap: '30px',
  //   height: 'auto',
  //
  //   '& .card': {
  //     borderRadius: '20px',
  //     flex: '1 1 31%',
  //     padding: '20px 18px',
  //   },
  // },
}));

const OurValues = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <StyledOurValues>
      <Container maxWidth='md'>
        <div className='ourValues__container'>
          <Typography variant='h3' className='ourValues__title'>
            Наши ценности
          </Typography>
          {isMobile ? <OurValuesMobileCarousel /> : <OurValuesDesktop />}
        </div>
      </Container>
    </StyledOurValues>
  );
};

export default OurValues;
