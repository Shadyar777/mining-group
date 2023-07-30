import { styled } from '@mui/material';

const StyledFooter = styled('footer')(() => ({
  flex: '0 0 auto',
  background: `url('./../../../../public/images/bg-footer.jpg')`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  // padding: '170px 0',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  height: '336px',
  '.footer__conteiner': {
    display: 'grid',
    gridTemplateAreas: `"logo list-links list-links" "rights-reserved rights-reserved rights-reserved"`,
    placeItems: 'center',
    flexWrap: 'wrap',

    '& .footer__logo': {
      gridArea: 'logo',
    },
    '& .footer__list-links': {
      gridArea: 'list-links',
    },
    '& .footer-text__rights-reserved': {
      gridArea: 'rights-reserved',
      textAlign: 'center',
      color: '#FFF',
      fontFamily: 'Geologica',
      fontSize: '12px',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: 'normal',
    },
  },
  ul: {
    margin: '0',
    padding: '0',
    fontWeight: '400',
    fontSize: '24px',
    display: 'flex',
    gap: '0 16px',

    li: {
      listStyleType: 'none',

      a: {
        color: 'white',
        textDecoration: 'none',
      },
    },
  },
}));

export default StyledFooter;
