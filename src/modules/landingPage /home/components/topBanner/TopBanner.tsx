import { styled } from '@mui/material';

export const StyledTopBanner = styled('div')(({ theme: { breakpoints } }) => ({
  width: '100%',
  height: '700px',
  position: 'relative',
  marginTop: '-160px',

  gridArea: 'TopBanner',

  '.top-banner-container': {
    width: '100%',
    height: '100%',
    background: `url('./../../../../../public/images/home-top-banner.jpg')`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  },

  [breakpoints.down('mobileSm')]: {
    height: '100px',
    '& .top-banner-container': {
      background: 'unset',
    },
  },
}));

const TopBanner = () => {
  return (
    <StyledTopBanner>
      <div className='top-banner-container' />
    </StyledTopBanner>
  );
};

export default TopBanner;
