import { styled } from '@mui/material';
import Vacancies from '../components/Vacancies.tsx';

const StyledVacanciesPage = styled('div')(({ theme: { breakpoints } }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '120px',
  [breakpoints.down('sm')]: {
    gap: '60px',
  },
  [breakpoints.down('mobileSm')]: {
    background: '#FFF8EC !important', // FIXME - нужно исправить background для всего page
    flexDirection: 'unset',
    display: 'unset',
    gap: 'unset',
  },
}));
const VacanciesPage = () => {
  return (
    <StyledVacanciesPage>
      <Vacancies />
    </StyledVacanciesPage>
  );
};

export default VacanciesPage;
