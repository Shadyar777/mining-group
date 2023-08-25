import { CircularProgress, styled } from '@mui/material';

type LoadingContainerProps = {
  customHeight?: string;
};

const LoadingContainer = styled('div')<LoadingContainerProps>(
  ({ customHeight }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: customHeight ? customHeight : '100vh',
  }),
);

type LoadingSpinner = LoadingContainerProps;
const LoadingSpinner = ({ customHeight }: LoadingSpinner) => (
  <LoadingContainer customHeight={customHeight}>
    <CircularProgress />
  </LoadingContainer>
);

export default LoadingSpinner;
