import { useState } from 'react';
import { styled } from '@mui/material';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';
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
  jobId: number;
  title: string;
  conditions: string;
  tasks: string;
  mail: string;
  backgroundColor: string;
  phone: string;
};
const VacancyCard = ({
  jobId,
  title,
  conditions,
  tasks,
  mail,
  backgroundColor,
  phone,
}: VacancyCardProps) => {
  const [openEdit, setOpenEdit] = useState(false);

  const job = {
    jobId,
    title,
    conditions,
    tasks,
    mail,
    backgroundColor,
    phone,
  };

  const onOpenEdit = () => {
    setOpenEdit(true);
  };
  const onCloseEdit = () => {
    setOpenEdit(false);
  };

  const phoneHref = `tel:${phone}`;

  return (
    <>
      <StyledVacancyCard bgColor={backgroundColor}>
        <div className='card__content'>
          <div className='card__title'>{title}</div>
          <div className='card__terms title'>
            <div className='terms__title title'>Условия:</div>
            <div className='terms__text text'>{conditions}</div>
          </div>
          <div className='card__tasks'>
            <div className='tasks__title title'>Задачи:</div>
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
                <PhoneRoundedIcon /> <a href={phoneHref}>{phone}</a>
              </div>
            )}
          </div>
          <UploadButton
            text='Редактировать'
            icon={<EditFileIcon />}
            onClick={onOpenEdit}
          />
        </div>
      </StyledVacancyCard>
      <CustomModal maxwidth='900px' open={openEdit} handleClose={onCloseEdit}>
        <EditingToolsForVacancyCard
          jobContent={job}
          setOpenEdit={setOpenEdit}
        />
      </CustomModal>
    </>
  );
};

export default VacancyCard;
