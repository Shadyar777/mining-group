import { styled } from '@mui/material';
import MapOfKazakhstan from '../components/mapOfKazakhstan/MapOfKazakhstan.tsx';
import Investor from '../components/investor/Investor.tsx';

const StyledAssetsEnterprisePage = styled('div')(
  ({ theme: { breakpoints } }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: '120px',
    [breakpoints.down('sm')]: {
      gap: '60px',
    },
    [breakpoints.down('mobileSm')]: {
      // marginTop: '60px',
      background: '#FFF8EC !important', // FIXME - нужно исправить background для всего page
      flexDirection: 'unset',
      display: 'unset',
      gap: 'unset',
    },
  }),
);

const AssetsEnterprisePage = () => {
  return (
    <StyledAssetsEnterprisePage>
      <MapOfKazakhstan />
      <Investor />
    </StyledAssetsEnterprisePage>
  );
};

export default AssetsEnterprisePage;
