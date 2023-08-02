import { Container, styled, Typography } from '@mui/material';
import Card from './Card.tsx';

export const StyledActivity = styled('div')(({ theme: { breakpoints } }) => ({
  '& .activity__title': {
    marginBottom: '40px',

    color: '#392C0B',
    textAlign: 'center',
  },
  '& .activity__content': {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '16px',
    height: 'auto',

    '& .card': {
      flex: '1 1 48%',
      padding: '20px 18px',
    },
  },

  [breakpoints.down('mobileSm')]: {
    background: '#FFF8EC',
    padding: '40px 0',
    '& .activity__title': {
      marginBottom: '24px',

      fontSize: '20px',
      fontWeight: '600',
    },
  },
}));
const arr = Array.from({ length: 3 }, (_, index) => index + 1);
const Activity = () => {
  return (
    <StyledActivity>
      <Container maxWidth='md'>
        <Container maxWidth='md'>
          <div className='activity__container'>
            <Typography variant='h3' className='activity__title'>
              Виды деятельности и спектр услуг
            </Typography>
            <div className='activity__content'>
              {arr.map((_, idx) => (
                <Card key={idx} />
              ))}
            </div>
          </div>
        </Container>
      </Container>
    </StyledActivity>
  );
};

export default Activity;
