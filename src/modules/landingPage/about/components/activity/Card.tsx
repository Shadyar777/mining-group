import { styled, Typography } from '@mui/material';

export const StyledCard = styled('div')(({ theme: { breakpoints } }) => ({
  height: 'auto',
  backgroundColor: 'white',
  position: 'relative',
  borderRadius: '20px',
  padding: '12px',

  '& .card__title': {
    color: '#F28A2E',
    fontSize: '24px',
    fontWeight: ' 600',
  },
  '& .card__text': {
    color: '#000',
    fontSize: '20px',
    fontWeight: '300',
  },

  [breakpoints.down('mobileSm')]: {
    '& .card__title': {
      fontSize: '16px',
    },
    '& .card__text': {
      fontSize: '12px',
    },
  },
}));

const Card = () => {
  return (
    <>
      <StyledCard className='card'>
        <Typography variant='h5' className='card__title'>
          Развитие активов:
        </Typography>
        <p className='card__text'>
          Проведение технического аудита Оценка запасов по стандарту JORC.
          Разработка стратегии дальнейшего развития. Разработка проектной
          документации по международным стандартам. Управление проектами.
        </p>
      </StyledCard>
    </>
  );
};

export default Card;
