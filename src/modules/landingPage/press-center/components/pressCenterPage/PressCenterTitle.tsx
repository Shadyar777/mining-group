import { Container, styled, Typography } from '@mui/material';

const StyledPressCenterTitle = styled('div')(({ theme: { breakpoints } }) => ({
  '& .press-center__title': {
    color: '#004B8F',
    fontSize: '48px',
    fontWeight: 700,
    textAlign: 'center',
  },

  [breakpoints.down('sm')]: {},
  [breakpoints.down('mobileSm')]: {
    background: '#FFF8EC',
    '& .press-center__title': {
      padding: '32px 0',
      fontSize: '24px',
    },
  },
}));
const PressCenterTitle = () => {
  return (
    <StyledPressCenterTitle>
      <Container maxWidth='md'>
        <Typography variant='h3' className='press-center__title'>
          Разведка месторождения золота
        </Typography>
      </Container>
    </StyledPressCenterTitle>
  );
};

export default PressCenterTitle;
