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

type CardProps = {
  id: string;
  title: string;
  text: string;
};
const Card = ({ title, text }: CardProps) => {
  return (
    <>
      <StyledCard className='card'>
        <Typography variant='h5' className='card__title'>
          {title}
        </Typography>
        <p className='card__text'>{text}</p>
      </StyledCard>
    </>
  );
};

export default Card;
