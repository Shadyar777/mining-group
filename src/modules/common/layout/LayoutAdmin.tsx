import Header from '../header/Header.tsx';
import { Box } from '@mui/material';
import Footer from '../footer/Footer.tsx';
import { Outlet } from 'react-router-dom';

const LayoutAdmin = () => {
  return (
    <Box display='flex' flexDirection='column' minHeight='100vh'>
      <Header />
      <Box flex='1 0 auto'>
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
};

export { LayoutAdmin };
