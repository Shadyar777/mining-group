import { styled } from '@mui/material';
import Contacts from '../components/Contacts.tsx';

const StyledContactsPage = styled('div')(({ theme: { breakpoints } }) => ({
  display: 'flex',
  flexDirection: 'column',
  background: '#FFF8EC',

  [breakpoints.down('sm')]: {},
  [breakpoints.down('mobileSm')]: {
    flexDirection: 'row',
  },
}));
const ContactsPage = () => {
  return (
    <StyledContactsPage>
      <Contacts />
    </StyledContactsPage>
  );
};

export default ContactsPage;
