import { styled } from '@mui/material';
import bgFooterSrc from '@public/images/bg-footer.png';

const StyledFooter = styled('footer')(({ theme: { breakpoints } }) => ({
  flex: '0 0 auto',
  background: `url(${bgFooterSrc})`,
  backgroundColor: '#FFF8EC',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'end',
  paddingBottom: '20px',
  height: '376px',
  '.footer__conteiner': {
    display: 'grid',
    gridTemplateAreas: `"logo list-links list-links" "rights-reserved rights-reserved rights-reserved"`,
    placeItems: 'center',
    flexWrap: 'wrap',
    gap: '0 30px',

    '& .footer__logo': {
      gridArea: 'logo',
    },
    '& .footer__list-links': {
      gridArea: 'list-links',
      justifySelf: 'start',
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
    gap: '0 64px',
    flexWrap: 'wrap',

    li: {
      listStyleType: 'none',

      a: {
        color: 'white',
        textDecoration: 'none',
      },

      '& .link-react-scroll': {
        cursor: 'pointer',
      },
    },
  },
  [breakpoints.down('mobileSm')]: {
    '& .footer__conteiner': {
      gridTemplateAreas: `"logo" "list-links" "rights-reserved"`,
      placeItems: 'start',
      gap: '30px 0',
    },
    '& .footer__list-links': {
      display: 'flex',
      flexDirection: 'column',
      fontSize: '12px',
      gap: '8px',
    },
    '& .footer-text__rights-reserved': {
      fontSize: '8px',
      justifySelf: 'center',
    },
  },

  ['@media (min-width: 1860px)']: {
    height: '500px',
  },
}));

export default StyledFooter;
