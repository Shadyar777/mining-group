import { useState } from 'react';
import { styled, Typography } from '@mui/material';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';
import CustomModal from '../../../common/CustomModal.tsx';
import EditingToolsForVacancyCard from './EditingToolsForVacancyCard.tsx';
import CardMenu from '../../common/CardMenu.tsx';
import { useDeleteJobMutation } from '../../../../rtk-query';

type StyledVacancyCardProps = {
  bgColor: string;
  isActive: boolean;
};

const StyledVacancyCard = styled('div')<StyledVacancyCardProps>(
  ({ theme: { breakpoints }, bgColor, isActive }) => ({
    backgroundColor: bgColor ?? '#F28A2E',
    opacity: isActive ? 1 : 0.5,
    padding: '32px',
    color: 'white',
    borderRadius: '30px',

    '& .card__content': {
      display: 'flex',
      flexDirection: 'column',
      gap: '30px 0',

      '& .card__tooltip': {
        position: 'relative',

        '& .img__more-vert': {
          position: 'absolute',
          top: '10px',
          right: '16px',
          cursor: 'pointer',
          zIndex: '1',
          borderRadius: '50px',
          color: 'white',
          display: 'flex',
          padding: '3px',
        },
      },
    },
    '& .card__title': {
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
      fontSize: '24px',
      fontWeight: 400,
    },
    '& .text': {
      fontSize: '20px',
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
      borderRadius: '0px',
      '& .card__content': {
        gap: '24px 0',

        '& .card__tooltip': {
          '& .img__more-vert': {
            top: '-10px',
          },
        },
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
  active: boolean;
};
const VacancyCard = ({
  jobId,
  title,
  conditions,
  tasks,
  mail,
  backgroundColor,
  phone,
  active,
}: VacancyCardProps) => {
  const [openEdit, setOpenEdit] = useState(false);
  const [deleteJobById] = useDeleteJobMutation();

  const job = {
    jobId,
    title,
    conditions,
    tasks,
    mail,
    backgroundColor,
    phone,
    active,
  };

  const onCloseEdit = () => {
    setOpenEdit(false);
  };

  const handleEdit = () => {
    setOpenEdit(true);
  };

  const handleDelete = () => {
    deleteJobById(jobId);
  };

  return (
    <>
      <StyledVacancyCard bgColor={backgroundColor} isActive={active}>
        <div className='card__content'>
          <div className='card__tooltip'>
            <CardMenu onEdit={handleEdit} onDelete={handleDelete} />
          </div>
          <Typography variant='h3' className='card__title'>
            {title}
          </Typography>
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
                <PhoneRoundedIcon /> <a href={`tel:${phone}`}>{phone}</a>
              </div>
            )}
          </div>
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
