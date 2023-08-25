import { Drawer, FormControl, styled } from '@mui/material';

export const StyledHeader = styled('header')(({ theme: { breakpoints } }) => ({
  padding: '32px',
  position: 'relative',
  width: '100%',
  top: '0',
  left: '0',
  zIndex: '2',

  '.header__conteiner': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    '.header__language-and-logo': {
      marginLeft: '30px',
      display: 'flex',
      gap: '0 32px',
      alignItems: 'center',
    },
  },
  '& .header-bg__wive': {
    pointerEvents: ' none',
    userSelect: 'none',
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    // height: '100px',
    zIndex: '-20',

    img: {
      width: '100%',
      height: '100%',
    },
  },

  [breakpoints.down('mobileSm')]: {
    background: 'white',
    padding: '32px 0',
  },
}));

export const StyledLanguages = styled(FormControl)(
  ({ theme: { breakpoints } }) => ({
    '& .languages__select': {
      boxShadow: 'none',
      color: 'white',
      borderRadius: '50px',
      '.MuiOutlinedInput-notchedOutline': { border: '2px solid white' },
      '&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
        border: '2px solid white',
      },
    },
    '& .MuiSelect-select': {
      padding: '5px 15px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    '& .MuiInputBase-input, .MuiOutlinedInput-input': {
      paddingRight: '16px !important',
    },

    [breakpoints.between('sm', 'md')]: {
      '& .languages__select': {
        color: 'black',

        '.MuiOutlinedInput-notchedOutline': { border: '2px solid black' },
        '&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
          {
            border: '2px solid black',
          },
      },
    },
    [breakpoints.down('mobileSm')]: {
      width: 'unset !important',
    },
  }),
);

export const StyledLogo = styled('div')(({ theme: { breakpoints } }) => ({
  '.logo__img': {
    display: 'flex',
    maxWidth: '120px',
    minWidth: '50px',
    width: '100%',
    height: 'auto',
  },

  [breakpoints.down('md')]: {
    '& .logo__img': {
      maxWidth: '90px',
      minWidth: '50px',
    },
  },
  [breakpoints.down('mobileSm')]: {
    '& .logo__img': {
      maxWidth: '50px',
    },
  },
}));

export const StyledMenu = styled('div')(() => ({
  // width: '32px',
  background: '#FFB940',
  borderRadius: '50%',
  overflow: 'hidden',
  color: 'white',

  '.css-ancrnh-MuiButtonBase-root-MuiIconButton-root': {
    margin: '0',
    padding: '8px',
  },
}));
export const StyledLeftDrawer = styled(Drawer)(
  ({ theme: { breakpoints } }) => ({
    // width: '100px',
    ul: {
      margin: '0',
      padding: '0',

      display: 'flex',
      flexDirection: 'column',
      gap: '16px 0',

      li: {
        listStyleType: 'none',

        a: {
          color: 'white',
          textDecoration: 'none',
        },
      },
    },
    '.MuiDrawer-paper': {
      position: 'relative',
      background: '#F28A2E',
      padding: '48px 32px',
      width: '320px',

      color: 'white',
      fontSize: '26px',
      fontWeight: '700',
      wordWrap: 'break-word',

      '&::after': {
        content: `""`,
        background: `url('./../../../../public/svgs/bg-left-drawer.svg')`,
        position: 'absolute',
        bottom: 0,
        left: 0,
        zIndex: '-1',
        width: '100%',
        height: '80%',
      },
    },
    [breakpoints.down('sm')]: {
      '& .MuiDrawer-paper': {
        width: '250px !important',
      },
      ul: {
        margin: '0 0 16px 0',
        padding: '0',

        display: 'flex',
        flexDirection: 'column',
        gap: '16px 0',

        li: {
          listStyleType: 'none',
          fontSize: '16px',
          a: {
            color: 'white',
            textDecoration: 'none',
          },
        },
      },
    },
  }),
);
