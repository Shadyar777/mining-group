import { styled } from '@mui/material';

export const StyledTopBanner = styled('div')(() => ({
  width: '100%',
  height: '700px',
  position: 'relative',

  '.top-banner-container': {
    width: '100%',
    height: '100%',
    background: `url('./../../../../../public/images/home-top-banner.jpg')`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  },

  // '&::after': {
  //   content: `""`,
  //   background: `url('./../../../../../public/svgs/home-top-banner-wave.svg')`,
  //   position: 'absolute',
  //   backgroundRepeat: 'no-repeat',
  //   backgroundSize: 'contain',
  //   top: 0,
  //   left: 0,
  //   width: '100%',
  //   height: '100%',
  // },
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
