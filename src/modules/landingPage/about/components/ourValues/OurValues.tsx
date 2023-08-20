import {
  Container,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import OurValuesMobileCarousel from './OurValuesMobileCarousel.tsx';
import OurValuesDesktop from './OurValuesDesktop.tsx';
import { useAppSelector } from '../../../../../store/hooks.ts';
import { getAddGlobalLanguages } from '../../../../common/sliceCommon/slice.ts';
import { useGetValuesQuery } from '../../../../../rtk-query';
// import {lazy} from "react";
// const LazyActivityMobileCarousel = lazy(() => import('./OurValuesMobileCarousel.tsx'));

export const StyledOurValues = styled('div')(({ theme: { breakpoints } }) => ({
  padding: '40px 0',
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
    background: '#FFF8EC',
    '& .ourValues__title': {
      fontSize: '24px',
    },
  },
}));

const OurValues = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const lng = useAppSelector(getAddGlobalLanguages);
  const { data } = useGetValuesQuery(lng);

  if (!data) {
    return;
  }
  return (
    <StyledOurValues>
      <Container maxWidth='md'>
        <div className='ourValues__container'>
          <Typography variant='h3' className='ourValues__title'>
            Наши ценности
          </Typography>
          {isMobile ? (
            <OurValuesMobileCarousel data={data.data} />
          ) : (
            <OurValuesDesktop data={data.data} />
          )}
        </div>
      </Container>
    </StyledOurValues>
  );
};

export default OurValues;
