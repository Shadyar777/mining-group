import { CircularProgress, styled } from '@mui/material';

const LoadingContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
});

const LoadingSpinner = () => (
  <LoadingContainer>
    <CircularProgress />
  </LoadingContainer>
);

export default LoadingSpinner;
