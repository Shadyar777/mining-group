import { useEffect } from 'react';
import { Container, styled, Typography } from '@mui/material';
import Card from './Card.tsx';
import { useAppSelector } from '../../../../../store/hooks.ts';
import { getAddGlobalLanguages } from '../../../../common/sliceCommon/slice.ts';
import { useGetAllActivitiesQuery } from '../../../../../rtk-query';
import LoadingSpinner from '../../../../common/loadingSpinner';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation('translation', { keyPrefix: 'about' });

  const lng = useAppSelector(getAddGlobalLanguages);
  const { data, isLoading } = useGetAllActivitiesQuery(lng);

  useEffect(() => {
    const hashValue = window.location.hash.substring(1); // #services => services
    if (!isLoading && data && hashValue === 'services') {
      const element = document.getElementById('services');
      element && element.scrollIntoView({ behavior: 'smooth' });
    }
  }, [data, isLoading]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (!data) {
    return;
  }
  return (
    <StyledActivity>
      <Container maxWidth='lgSmall'>
        <div className='activity__container'>
          <Typography id='services' variant='h3' className='activity__title'>
            {t('activity')}
          </Typography>
          <div className='activity__content'>
            {data.data.map(({ title, text, id }, idx) => (
              <Card title={title} text={text} id={id} key={`${idx}-${id}`} />
            ))}
          </div>
        </div>
      </Container>
    </StyledActivity>
  );
};

export default Activity;
