import { TypographyOptions } from '@mui/material/styles/createTypography';

export const createTypography = (): TypographyOptions => {
  return {
    fontFamily: '"Geologica", -apple-system',
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.5,
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: 1.57,
    },
    button: {
      fontWeight: 600,
    },
    caption: {
      fontSize: '0.75rem',
      fontWeight: 500,
      lineHeight: 1.66,
    },
    subtitle1: {
      fontSize: '1rem',
      fontWeight: 500,
      lineHeight: 1.57,
    },
    subtitle2: {
      fontSize: '0.875rem',
      fontWeight: 500,
      lineHeight: 1.57,
    },
    overline: {
      fontSize: '0.75rem',
      fontWeight: 600,
      letterSpacing: '0.5px',
      lineHeight: 2.5,
      textTransform: 'uppercase',
    },
    h1: {
      fontFamily: "'Geologica', sans-serif",
      fontWeight: 700,
      fontSize: '3.5rem',
      lineHeight: 1.2,
    },
    h2: {
      fontFamily: "'Geologica', sans-serif",
      fontWeight: 700,
      fontSize: '3.5rem', // 56px
      lineHeight: 1.2,
    },
    h3: {
      fontFamily: "'Geologica', sans-serif",
      fontWeight: 700,
      fontSize: '2.25rem', // 36px
      lineHeight: 1.2,
    },
    h4: {
      fontFamily: "'Geologica', sans-serif",
      fontWeight: 600,
      fontSize: '2rem', // 32px
      lineHeight: 1.2,
    },
    h5: {
      fontFamily: "'Geologica', sans-serif",
      fontWeight: 600,
      fontSize: '1.5rem', // 24px
      lineHeight: 1.2,
    },
    h6: {
      fontFamily: "'Geologica', sans-serif",
      fontWeight: 600,
      fontSize: '1rem', // 16px
      lineHeight: 1.2,
    },
  };
};
