import { styled } from '@mui/material';
import { useGetBackgroundQuery } from '../../../../../rtk-query';
import { useAppSelector } from '../../../../../store/hooks.ts';
import { getAddGlobalLanguages } from '../../../../common/sliceCommon/slice.ts';
import LoadingSpinner from '../../../../common/loadingSpinner';

import mokeImg from './../../../../../../public/images/home-top-banner.jpg';

type StyledTopBannerProps = {
  bgImg?: string | null;
};

export const StyledTopBanner = styled('div')<StyledTopBannerProps>(
  ({ theme: { breakpoints }, bgImg }) => ({
    width: '100%',
    height: '700px',
    position: 'relative',
    marginTop: '-160px',

    gridArea: 'TopBanner',

    '.top-banner-container': {
      width: '100%',
      height: '100%',
      backgroundImage: bgImg ? `url(${bgImg})` : 'none',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
    },

    [breakpoints.down('mobileSm')]: {
      display: 'none',
      height: '100px',
      '& .top-banner-container': {
        background: 'unset',
      },
    },
  }),
);

const TopBanner = () => {
  const lng = useAppSelector(getAddGlobalLanguages);
  const { data, isLoading } = useGetBackgroundQuery(lng);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <StyledTopBanner bgImg={data?.data?.image || mokeImg}>
      <div className='top-banner-container' />
    </StyledTopBanner>
  );
};

export default TopBanner;
