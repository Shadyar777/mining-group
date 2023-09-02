import { styled } from '@mui/material';
import { useEffect, useState } from 'react';
import { useGetBackgroundQuery } from '../../../../../rtk-query';
import { useAppSelector } from '../../../../../store/hooks.ts';
import { getAddGlobalLanguages } from '../../../../common/sliceCommon/slice.ts';
import { parseImgBase64 } from '../../../../../utils';
import LoadingSpinner from '../../../../common/loadingSpinner';

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
  const [bgImg, setBgImg] = useState<null | string>('');
  const lng = useAppSelector(getAddGlobalLanguages);
  const { data, isLoading } = useGetBackgroundQuery(lng);

  useEffect(() => {
    const parsedIconBase64 = data?.data
      ? parseImgBase64({
          data: data.data.mainFile.data || '',
          type: data.data.mainFile.type || '',
        })
      : null;
    setBgImg(parsedIconBase64);
  }, [data?.data]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <StyledTopBanner bgImg={bgImg}>
      <div className='top-banner-container' />
    </StyledTopBanner>
  );
};

export default TopBanner;
