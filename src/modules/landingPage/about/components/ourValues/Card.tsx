import { styled, Typography } from '@mui/material';

export const StyledCard = styled('div')(({ theme: { breakpoints } }) => ({
  width: 'clamp(150px, 100%, 250px)',
  height: 'auto',
  backgroundColor: 'white',
  position: 'relative',
  borderRadius: '20px',

  '& .card__title': {
    color: '#2A2A2A',
    textAlign: 'center',
    fontSize: '24px',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 'normal',
    position: 'relative',
    zIndex: '1',
  },
  '& .card__text': {
    textAlign: 'start',
    color: '#6A6A6A',
    fontSize: '1rem',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal',
    position: 'relative',
    zIndex: '1',
  },

  '& .card__img': {
    position: 'absolute',
    bottom: '10px',
    right: '10px',
    zIndex: '0',
    width: '92px',
    height: '92px',
    img: {
      width: '100%',
    },
  },

  [breakpoints.down('mobileSm')]: {
    '& .card__title': {
      fontSize: '14px',
    },
    '& .card__text': {
      fontSize: '10px',
    },
  },
}));

export type CardProps = {
  id: string;
  title: string;
  text: string;
  icon: string | null;
};

const Card = ({ title, icon, text }: CardProps) => {
  return (
    <>
      <StyledCard className='card'>
        <Typography variant='h5' className='card__title'>
          {title}
        </Typography>
        <p className='card__text'>{text}</p>
        <div className='card__img'>
          <img alt='' src={icon || ''} />
        </div>
      </StyledCard>
    </>
  );
};

export default Card;
