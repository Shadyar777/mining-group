import { styled } from '@mui/material';

export const StyledContentBanner = styled('div')(
  ({ theme: { breakpoints } }) => ({
    width: '100%',
    height: '100%',
    '& .banner-image, .banner-video': {
      width: '100%',
    },

    [breakpoints.up('lg')]: {
      '& .banner-video, .banner-image': {
        width: '100%',
        height: '700px',
        objectFit: 'fill',
      },
    },
    [breakpoints.down('lg')]: {
      '& .banner-video, .banner-image': {
        aspectRatio: '16 / 9',
        height: 'auto',
      },
    },
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
