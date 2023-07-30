import { Drawer, FormControl, styled } from '@mui/material';

export const StyledHeader = styled('header')(() => ({
  padding: '32px',
  position: 'absolute',
  width: '100%',
  top: '0',
  left: '0',
  zIndex: '2',

  '.header__conteiner': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    '.header__language-and-logo': {
      marginLeft: '100px',
      display: 'flex',
      gap: '0 32px',
      alignItems: 'center',
    },
  },
}));

export const StyledLanguages = styled(FormControl)(() => ({
  '.languages__select': {
    boxShadow: 'none',
    color: 'white',
    borderRadius: '50px',
    '.MuiOutlinedInput-notchedOutline': { border: '2px solid white' },
    '&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      border: '2px solid white',
    },
  },
}));

export const StyledLogo = styled('div')(() => ({
  '.logo__img': {
    maxWidth: '120px',
    minWidth: '50px',
    width: '100%',
    height: 'auto',
  },
}));

export const StyledMenu = styled('div')(() => ({
  background: '#FFB940',
  borderRadius: '50%',
  overflow: 'hidden',
  color: 'white',

  '.css-ancrnh-MuiButtonBase-root-MuiIconButton-root': {
    margin: '0',
    padding: '8px',
  },
}));
export const StyledLeftDrawer = styled(Drawer)(() => ({
  // padding: '32px',
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
}));
