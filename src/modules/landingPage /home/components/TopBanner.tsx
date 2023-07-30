import { styled } from '@mui/material';

export const StyledTopBanner = styled('div')(() => ({
  width: '100%',
  height: '700px',
  position: 'relative',

  '.top-banner-container': {
    width: '100%',
    height: '100%',
    background: `url('./../../../../../public/images/24.jpg')`,
    // background: `url('./../../../../../public/images/home-top-banner.png')`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  },

  '&::after': {
    content: `""`,
    background: `url('./../../../../../public/svgs/wave.svg')`,
    // background: `url('./../../../../../public/images/homo-top-banner-wave.png')`,
    position: 'absolute',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
}));

const TopBanner = () => {
  // return <StyledTopBanner>Home Page</StyledTopBanner>;
  return (
    <StyledTopBanner>
      <div className='top-banner-container' />
    </StyledTopBanner>
  );
};

export default TopBanner;
