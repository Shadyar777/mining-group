import { Container, styled, useMediaQuery, useTheme } from '@mui/material';
import VacancyCard from './VacancyCard.tsx';
import { useAppSelector } from '../../../../store/hooks.ts';
import { getAddGlobalLanguages } from '../../../common/sliceCommon/slice.ts';
import { useGetAllJobsQuery } from '../../../../rtk-query';
import LoadingSpinner from '../../../common/loadingSpinner';

const StyledVacancies = styled('div')(({ theme: { breakpoints } }) => ({
  padding: '40px 0',
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
  },
}));

const Vacancies = () => {
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
          {jobs.map((job, idx) => (
            <VacancyCard {...job} key={idx} />
          ))}
        </div>
      </Container>
    </StyledVacancies>
  );
};

export default Vacancies;
