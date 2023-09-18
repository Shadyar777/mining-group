import { styled } from '@mui/material';

export const StyledContentBanner = styled('div')(
  ({ theme: { breakpoints } }) => ({
    width: '100%',
    height: '100%',
    aspectRatio: '16 / 9',
    '& .banner-image, .banner-video': {
      width: '100%',
    },

    [breakpoints.down('mobileSm')]: {},
  }),
);

type ContentBanner = {
  imageSrc?: string;
  videoSrc?: string;
};
const ContentBanner = ({ videoSrc, imageSrc }: ContentBanner) => {
  return (
    <StyledContentBanner>
      {imageSrc && <img src={imageSrc} alt={''} className='banner-image' />}
      {videoSrc && (
        <video autoPlay loop muted className='banner-video'>
          <source src={videoSrc} type='video/mp4' />
        </video>
      )}
    </StyledContentBanner>
  );
};

export default ContentBanner;
