import { useState } from 'react';
import { styled } from '@mui/material';
import EditFileIcon from '../../../../svgs/EditFileIcon.tsx';
import UploadButton from '../../../common/buttons/UploadButton.tsx';
import CustomModal from '../../../common/CustomModal.tsx';
import EditingToolsForVacancyCard from './EditingToolsForVacancyCard.tsx';

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

    '& .card__mail': {
      display: 'flex',
      alignItems: 'center',
      '& .mail__icon': {
        marginRight: '16px',
        img: {
          width: '100%',
          height: '100%',
        },
      },
      a: {
        color: 'white',
        fontSize: '26px',
        fontWeight: 400,
        textDecoration: 'none',
      },
    },
    '& .upload-button': {
      alignSelf: 'center',
      marginTop: '31px',
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
      '& .card__mail': {
        a: {
          color: '#FFF',
          fontSize: '14px',
        },
      },
    },
  }),
);

type VacancyCardProps = {
  title: string;
  termsText: string;
  tasksText: string;
  mailHref: string;
  baColor: string;
};
const VacancyCard = ({
  title,
  termsText,
  tasksText,
  mailHref,
  baColor,
}: VacancyCardProps) => {
  const [openEdit, setOpenEdit] = useState(false);

  const onOpenEdit = () => {
    setOpenEdit(true);
  };
  const onCloseEdit = () => {
    setOpenEdit(false);
  };

  return (
    <>
      <StyledVacancyCard bgColor={baColor}>
        <div className='card__content'>
          <div className='card__title'>{title}</div>
          <div className='card__terms title'>
            <div className='terms__title title'>Условия:</div>
            <div className='terms__text text'>{termsText}</div>
          </div>
          <div className='card__tasks'>
            <div className='tasks__title title'>Задачи:</div>
            <div className='tasks__text text'>{tasksText}</div>
          </div>
          <div className='card__mail'>
            <div className='mail__icon icon'>
              <img alt='' src='../../../../../public/images/mail.svg' />
            </div>
            <a href={mailHref}>{mailHref}</a>
          </div>
          <UploadButton
            text='Редактировать'
            icon={<EditFileIcon />}
            onClick={onOpenEdit}
          />
        </div>
      </StyledVacancyCard>
      <CustomModal maxwidth='900px' open={openEdit} handleClose={onCloseEdit}>
        <EditingToolsForVacancyCard id='fake-id' />
      </CustomModal>
    </>
  );
};

VacancyCard.defaultProps = {
  title: 'Главный экономист предприятия',
  termsText: 'График 5/2 оффлайн, город Шымкент',
  tasksText:
    'Сознание экономического блока. Сознание системы бюджетирование и планирования 5/2 оффлайн, город Шымкент',
  mailHref: 'info@imgkz.com',
  baColor: '#004B8F',
};

export default VacancyCard;
