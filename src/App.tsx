import Header from './modules/common/header/Header';
import Footer from './modules/common/footer/Footer';

import { useAppRoutes } from './routers/useAppRoutes';
import { Box } from '@mui/material';

export function App() {
  const element = useAppRoutes();

  return (
    <Box display='flex' flexDirection='column' height='100%'>
      <Header />
      <Box flex='1 0 auto'>{element}</Box>
      <Footer />
    </Box>
  );
}
