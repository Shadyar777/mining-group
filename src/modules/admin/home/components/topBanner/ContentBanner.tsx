import { styled } from '@mui/material';
import OldOrNewVideoContent from './OldOrNewVideoContent.tsx';

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
    </StyledContentBanner>
  );
};

export default ContentBanner;
