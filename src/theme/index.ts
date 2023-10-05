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
        mobileSm: 480,
        sm: 600,
        md: 848,
        lgSmall: 1015, // 981px
        lg: 1280,
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

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: true;
    mobileSm: true;
    sm: true;
    md: true;
    lgSmall: true;
    lg: true;
    xl: true;
  }
}

export const theme = createTheme();
