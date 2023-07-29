import { createTheme as createMuiTheme } from '@mui/material';

import { createTypography } from './create-typography';
import { createComponents } from './create-components';

function createTheme() {
  const components = createComponents();
  const typography = createTypography();

  return createMuiTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1440,
      },
    },
    components,
    shape: {
      borderRadius: 20,
    },
    typography,
  });
}

export const theme = createTheme();
