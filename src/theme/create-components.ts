export function createComponents() {
  return {
    MuiCssBaseline: {
      styleOverrides: {
        '@media (min-width:480px)': {
          // Desktop
          body: {
            backgroundColor: '#FFF8EC',
            color: 'black',
          },
        },
        '@media (max-width:480px)': {
          // Mobile
          body: {
            backgroundColor: '#ffffff',
            color: 'black',
          },
        },
      },
    },
  };
}
