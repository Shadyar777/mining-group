import { styled } from '@mui/material';
import { useGetBackgroundQuery } from '../../../../../rtk-query';
import { useAppSelector } from '../../../../../store/hooks.ts';
import { getAddGlobalLanguages } from '../../../../common/sliceCommon/slice.ts';
import LoadingSpinner from '../../../../common/loadingSpinner';
import ContentBanner from './ContentBanner.tsx';

export const StyledTopBanner = styled('div')(({ theme: { breakpoints } }) => ({
  width: '100%',
  position: 'relative',
  marginTop: '-160px',
  gridArea: 'TopBanner',
  [breakpoints.down('mobileSm')]: {
    display: 'none',
    height: '100px',
  },
}));

const TopBanner = () => {
  const lng = useAppSelector(getAddGlobalLanguages);
  const { data, isLoading } = useGetBackgroundQuery(lng);

  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (!data) {
    return;
  }

  return (
    <StyledTopBanner>
      <ContentBanner videoSrc={data.data.video} imageSrc={data.data.image} />
    </StyledTopBanner>
  );
};

export default TopBanner;
