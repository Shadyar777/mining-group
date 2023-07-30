import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';

import { App } from './App.tsx';

import { theme } from './theme/index.ts';
import { store } from './store/index.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          <CssBaseline />
          <App />
        </Router>
      </ThemeProvider>
    </Provider>
  </StrictMode>,
);
