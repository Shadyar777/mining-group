import { Container, styled, Typography } from '@mui/material';
import Card from './Card.tsx';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import NewCard from './NewCard.tsx';
import { useGetAllActivitiesQuery } from '../../../../../rtk-query/activitiesApi.ts';

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

const Activity = () => {
  const location = useLocation();
  const { data } = useGetAllActivitiesQuery('ru');
  console.log('data?.data', data?.data);
  useEffect(() => {
    if (location.hash === '#services') {
      const element = document.getElementById('services');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);
  return (
    <StyledActivity>
      <Container maxWidth='md'>
        <Container maxWidth='md'>
          <div className='activity__container'>
            <Typography id='services' variant='h3' className='activity__title'>
              Виды деятельности и спектр услуг
            </Typography>
            <div className='activity__content'>
              {data &&
                data.data.map(({ title, text, id }, idx) => (
                  <Card
                    title={title}
                    text={text}
                    id={id}
                    key={`${idx}-${id}`}
                  />
                ))}
              <NewCard />
            </div>
          </div>
        </Container>
      </Container>
    </StyledActivity>
  );
};

export default Activity;
