import { Container, styled, useMediaQuery, useTheme } from '@mui/material';
import VacancyCard from './VacancyCard.tsx';
import AddNewVacancy from './AddNewVacancy.tsx';
import { useGetAllJobsQuery } from '../../../../rtk-query';
import { getAddGlobalLanguages } from '../../../common/sliceCommon/slice.ts';
import { useAppSelector } from '../../../../store/hooks.ts';

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
    // marginTop: '60px',
    // background: '#FFF8EC !important', // FIXME - нужно исправить background для всего page
    flexDirection: 'unset',
    display: 'unset',
    gap: 'unset',
  },
}));

// const maskProps = {
//   title: 'Главный экономист предприятия',
//   termsText: 'График 5/2 оффлайн, город Шымкент',
//   tasksText:
//     'Сознание экономического блока. Сознание системы бюджетирование и планирования 5/2 оффлайн, город Шымкент',
//   mailHref: 'info@imgkz.com',
//   baColor: '#004B8F',
// };

// const emptyArray = getArray(4);
const Vacancies = () => {
  const { breakpoints } = useTheme();
  const isMobile = useMediaQuery(breakpoints.down('mobileSm'));

  const lng = useAppSelector(getAddGlobalLanguages);
  const { data } = useGetAllJobsQuery(lng);

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
          {jobs &&
            jobs.map((job, idx) => (
              <VacancyCard {...job} key={`${idx}-${job.title}`} />
            ))}
          <AddNewVacancy />
        </div>
      </Container>
    </StyledVacancies>
  );
};

export default Vacancies;
