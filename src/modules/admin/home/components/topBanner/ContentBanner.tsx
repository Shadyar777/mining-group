import { styled } from '@mui/material';
import OldOrNewVideoContent from './OldOrNewVideoContent.tsx';

export const StyledContentBanner = styled('div')(
  ({ theme: { breakpoints } }) => ({
    width: '100%',
    height: '100%',
    aspectRatio: '16 / 9',
    '& .banner-image, .banner-video': {
      width: '100%',
      // aspectRatio: 16 / 9,
    },

    [breakpoints.down('mobileSm')]: {},
  }),
);

type ContentBanner = {
  imageSrc?: string;
  newVideoSrc?: string;
  oldVideoSrc?: string;
};
const ContentBanner = ({
  oldVideoSrc,
  newVideoSrc,
  imageSrc,
}: ContentBanner) => {
  return (
    <StyledContentBanner>
      {imageSrc && <img src={imageSrc} alt={''} className='banner-image' />}
      <OldOrNewVideoContent
        oldVideoSrc={oldVideoSrc}
        newVideoSrc={newVideoSrc}
      />
      {/*{videoSrc && (*/}
      {/*  <video autoPlay loop muted className='banner-video'>*/}
      {/*    <source src={videoSrc} type='video/mp4' />*/}
      {/*  </video>*/}
      {/*)}*/}
    </StyledContentBanner>
  );
};

export default ContentBanner;
