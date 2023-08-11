import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';

export default function ErrorComponent() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Alert severity='error'>
        Что-то пошло не так! Попробуйте обновить страницу.
      </Alert>
    </Box>
  );
}
