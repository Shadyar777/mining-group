import { styled } from '@mui/material';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';
import { useTranslation } from 'react-i18next';

type StyledVacancyCardProps = {
  bgColor: string;
};

const StyledVacancyCard = styled('div')<StyledVacancyCardProps>(
  ({ theme: { breakpoints }, bgColor }) => ({
    backgroundColor: bgColor ?? '#F28A2E',
    padding: '32px',
    color: 'white',
    borderRadius: '30px',

    '& .card__content': {
      display: 'flex',
      flexDirection: 'column',
      gap: '30px 0',
    },
    '& .card__title': {
      fontSize: '48px',
      fontWeight: 600,
    },
    '& .card__terms': {
      '& .terms__title': {},
      '& .terms__text': {},
    },
    '& .card__tasks': {
      '& .tasks__title': {},
      '& .tasks__text': {},
    },
    '& .title': {
      fontSize: '36px',
      fontWeight: 400,
    },
    '& .text': {
      fontSize: '24px',
      fontWeight: 300,
    },

    '& .card__contacts': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'start',
      justifyContent: 'center',
      fontSize: '26px',
      '& .contacts__mail, .contacts__tel': {
        display: 'flex',
        alignItems: 'center',
      },
      a: {
        marginLeft: '16px',
        color: 'white',
        fontWeight: 400,
        textDecoration: 'none',
      },
    },
    [breakpoints.down('sm')]: {
      gap: '60px',
    },
    [breakpoints.down('mobileSm')]: {
      '& .card__content': {
        gap: '24px 0',
      },
      '& .card__title': {
        fontSize: '20px',
        fontWeight: 600,
      },
      '& .title': {
        fontSize: '16px',
      },
      '& .text': {
        fontSize: '12px',
      },
      '& .card__contacts': {
        a: {
          color: '#FFF',
          fontSize: '14px',
        },
      },
    },
  }),
);

type VacancyCardProps = {
  jobId: number;
  title: string;
  conditions: string;
  tasks: string;
  mail: string;
  backgroundColor: string;
  phone: string;
};
const VacancyCard = ({
  title,
  conditions,
  tasks,
  mail,
  backgroundColor,
  phone,
}: VacancyCardProps) => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'vacancies',
  });
  return (
    <StyledVacancyCard bgColor={backgroundColor}>
      <div className='card__content'>
        <div className='card__title'>{title}</div>
        <div className='card__terms title'>
          <div className='terms__title title'>{t('conditions')}</div>
          <div className='terms__text text'>{conditions}</div>
        </div>
        <div className='card__tasks'>
          <div className='tasks__title title'>{t('tasks')}</div>
          <div className='tasks__text text'>{tasks}</div>
        </div>
        <div className='card__contacts'>
          {mail && (
            <div className='contacts__mail'>
              <EmailRoundedIcon /> <a href={mail}>{mail}</a>
            </div>
          )}
          {phone && (
            <div className='contacts__tel '>
              <PhoneRoundedIcon /> <a href={`tel:${phone}`}>{phone}</a>
            </div>
          )}
        </div>
      </div>
    </StyledVacancyCard>
  );
};

export default VacancyCard;
