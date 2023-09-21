import {
  Container,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import VacancyCard from './VacancyCard.tsx';
import { useAppSelector } from '../../../../store/hooks.ts';
import { getAddGlobalLanguages } from '../../../common/sliceCommon/slice.ts';
import { useGetAllJobsQuery } from '../../../../rtk-query';
import LoadingSpinner from '../../../common/loadingSpinner';
import { useTranslation } from 'react-i18next';

const StyledVacancies = styled('div')(({ theme: { breakpoints } }) => ({
  padding: '50px 0',
  '& .vacancies__title': {
    textAlign: 'center',
  },
  '& .vacancies__container': {
    display: 'flex',
    flexDirection: 'column',
    gap: '32px 0',
  },
  [breakpoints.down('sm')]: {
    gap: '32px',
  },
  [breakpoints.down('mobileSm')]: {
    flexDirection: 'unset',
    display: 'unset',
    gap: 'unset',

    '& .vacancies__title': {
      textAlign: 'center',
      fontSize: '24px',
    },
  },
}));

const Vacancies = () => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'vacancies',
  });
  const { breakpoints } = useTheme();
  const isMobile = useMediaQuery(breakpoints.down('mobileSm'));

  const lng = useAppSelector(getAddGlobalLanguages);
  const { data, isLoading } = useGetAllJobsQuery({
    lng,
    active: true,
  });

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (!data) {
    return;
  }

  const jobs =
    data &&
    data.data.list.map((job) => ({
      title: job.title,
      backgroundColor: job.backgroundColor,
      tasks: job.tasks,
      conditions: job.conditions,
      mail: job.mail,
      phone: job.phone,
      jobId: job.id,
    }));
  return (
    <StyledVacancies>
      <Container maxWidth='md' disableGutters={isMobile}>
        <div className='vacancies__container'>
          <Typography id='services' variant='h3' className='vacancies__title'>
            {t('vacancies')}
          </Typography>
          {jobs.map((job, idx) => (
            <VacancyCard {...job} key={idx} />
          ))}
        </div>
      </Container>
    </StyledVacancies>
  );
};

export default Vacancies;
