import { Container, styled, Typography } from '@mui/material';
import GoogleMaps from './GoogleMaps/GoogleMaps.tsx';

const StyledContacts = styled('div')(({ theme: { breakpoints } }) => ({
  padding: '40px 0 0 0',
  color: '#392C0B',
  '& .contacts__container': {
    display: 'flex',
    flexDirection: 'column',
    gap: '64px',
    '& .contacts__title': {
      textAlign: 'center',
    },
    '& .contacts__content': {
      display: 'flex',
      gap: '0 64px',
    },
    '& .content__text': {
      flex: '1 1 300px',
      color: '#392C0B',
      gap: '31px 0',
      fontSize: '26px',
      fontWeight: 400,
      display: 'flex',
      flexDirection: 'column',
      '& .text__location': {},
      '& .text__mail': {},
      '& .contact-link': {
        display: 'flex',
        alignItems: 'center',
        gap: '0 16px',

        a: {
          color: '#392C0B',
          fontSize: '26px',
          fontWeight: 400,
          textDecoration: 'none',
        },
      },
    },
  },

  [breakpoints.down('sm')]: {},
  [breakpoints.down('mobileSm')]: {
    padding: '32px 0',
    '& .contacts__container': {
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
      '& .contacts__title': {
        fontSize: '24px',
        fontWeight: 600,
      },
      '& .contacts__content': {
        display: 'flex',
        flexDirection: 'column',
        gap: '24px 0',
      },
      '& .content__text': {
        gap: '24px 0',
        flex: '1 1 auto',
        color: 'inherit',
        fontSize: '20px',
        fontWeight: 400,
        display: 'flex',
        flexDirection: 'column',
        '& .text__location': {},
        '& .text__mail': {},
        '& .contact-link': {
          display: 'flex',
          alignItems: 'center',
          a: {
            fontSize: '20px',
          },
        },
      },
    },
  },
}));
const Contacts = () => {
  return (
    <StyledContacts>
      <Container maxWidth='md'>
        <div className='contacts__container'>
          <Typography variant='h2' className='contacts__title'>
            Контакты
          </Typography>
          <div className='contacts__content'>
            <GoogleMaps />
            <div className='content__text'>
              <div className='text__location'>
                Республика Казахстан, г. Шымкент, микрорайон Нурсат 2, 19/1
                160023
              </div>
              <div className='text__tel contact-link'>
                <img alt='' src='../../../../../public/images/call.svg' />
                <a href='tel:+77470439940'> +7 (747) 034-99-40</a>
              </div>
              <div className='text__mail contact-link'>
                <img alt='' src='../../../../../public/images/mail.svg' />
                <a href='mailto: info@imgkz.com'>info@imgkz.com</a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </StyledContacts>
  );
};

export default Contacts;
