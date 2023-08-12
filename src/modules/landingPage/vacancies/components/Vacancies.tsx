import { Container, styled, useMediaQuery, useTheme } from '@mui/material';
import { getArray } from '../../../../utils/getArray.ts';
import VacancyCard from './VacancyCard.tsx';

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

const maskProps = {
  title: 'Главный экономист предприятия',
  termsText: 'График 5/2 оффлайн, город Шымкент',
  tasksText:
    'Сознание экономического блока. Сознание системы бюджетирование и планирования 5/2 оффлайн, город Шымкент',
  mailHref: 'info@imgkz.com',
  baColor: '#004B8F',
};

const emptyArray = getArray(4);
const Vacancies = () => {
  const { breakpoints } = useTheme();
  return (
    <StyledVacancies>
      <Container
        maxWidth='md'
        disableGutters={useMediaQuery(breakpoints.down('mobileSm'))}
      >
        <div className='vacancies__container'>
          {emptyArray.map((_, idx) => (
            <VacancyCard {...maskProps} key={idx} />
          ))}
        </div>
      </Container>
    </StyledVacancies>
  );
};

export default Vacancies;
