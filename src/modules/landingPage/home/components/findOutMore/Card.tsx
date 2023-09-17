import { styled, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { lendingRoutes } from '../../../routers';

export const StyledCard = styled('div')(({ theme: { breakpoints } }) => ({
  padding: '20px 0',
  display: 'flex',
  flexDirection: 'column',

  cursor: 'pointer',
  '& .card__img': {
    width: 'clamp(150px, 100%, 300px)',
    height: '300px',
    borderRadius: '20px',
    border: '3px solid #FFB940',
    overflow: 'hidden',
    marginBottom: '20px',

    img: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
  },
  '& .card__title': {
    width: 'clamp(150px, 100%, 250px)',
    flexWrap: 'wrap',
  },
  '& .card__text': {
    width: 'clamp(150px, 100%, 250px)',
    flexWrap: 'wrap',
    fontSize: '20px',
    fontStyle: 'normal',
    fontWeight: '400',
  },
  [breakpoints.down('mobileSm')]: {
    '& .card__title': {
      fontSize: '16px',
    },
    '& .card__text': {
      fontSize: '10px',
    },
    '& .card__img': {
      width: 'clamp(150px, 100%, 300px)',
      height: '200px',

      img: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
      },
    },
  },
}));
type Type = 'job' | 'about_company' | 'investors';

type CardProps = {
  id: string | number;
  title: string;
  text: string;
  file?: string;
  type: Type;
};

const getPath = (to: Type) => {
  const redirect = {
    job: lendingRoutes.VACANCIES,
    about_company: lendingRoutes.ABOUT,
    investors: lendingRoutes.ASSETS_ENTERPRISE,
  };
  return redirect[to] ?? lendingRoutes.HOME;
};

const Card = ({ title, text, file, type }: CardProps) => {
  const navigate = useNavigate();

  const goTo = () => {
    navigate(getPath(type));
  };
  return (
    <StyledCard onClick={goTo}>
      <div className='card__img'>
        <img alt='' src={file} />
      </div>
      <Typography variant='h4' className='card__title'>
        {title}
      </Typography>
      <Typography variant='body1' className='card__text'>
        {text}
      </Typography>
    </StyledCard>
  );
};

export default Card;
