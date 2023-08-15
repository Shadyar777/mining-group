import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';

import Wrapper from './Wrapper';

import './i18n';

import { theme } from './theme';
import { store } from './store';

import { routers } from './routers/appRoutes.tsx';

import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-multi-carousel/lib/styles.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Wrapper>
          <RouterProvider router={routers} />
        </Wrapper>
      </ThemeProvider>
    </Provider>
  </StrictMode>,
);
