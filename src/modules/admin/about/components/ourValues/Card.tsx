import { styled, Typography } from '@mui/material';
import CustomModal from '../../../../common/CustomModal.tsx';
import { useState } from 'react';
import EditingToolsForOurValuesCard from './EditingToolsForOurValuesCard.tsx';
import CardMenu from '../../../common/CardMenu.tsx';
import { useDeleteValuesMutation } from '../../../../../rtk-query';

export const StyledCard = styled('div')(({ theme: { breakpoints } }) => ({
  width: 'clamp(150px, 100%, 250px)',
  height: 'auto',
  backgroundColor: 'white',
  position: 'relative',
  borderRadius: '20px',
  overflow: 'hidden',

  '& .card__title': {
    color: '#2A2A2A',
    textAlign: 'center',
    fontSize: '24px',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 'normal',
    position: 'relative',
    zIndex: '1',
  },
  '& .card__text': {
    textAlign: 'start',
    color: '#6A6A6A',
    fontSize: '1rem',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal',
    position: 'relative',
    zIndex: '1',
  },

  '& .card__img': {
    position: 'absolute',
    bottom: '10px',
    right: '10px',
    zIndex: '0',
    width: '92px',
    height: '92px',
    img: {
      width: '100%',
    },
  },

  '& .card__edit': {
    cursor: 'pointer',
    alignSelf: 'center',
    display: 'flex',
    justifyContent: 'end',
  },

  [breakpoints.down('mobileSm')]: {
    '& .card__title': {
      fontSize: '14px',
    },
    '& .card__text': {
      fontSize: '10px',
    },
  },
}));

// const emptyContent = {
//   title: 'Экология',
//   text: 'Приоритет компании — защита и сохранение экологии. Мы делаем конкретные шаги для минимизация влияния золотодобывающего производства на окружающую среду.',
//   icon: '../../../../../../public/mock-images/eco.svg',
// };

export type CardProps = {
  id: string;
  title: string;
  text: string;
  icon: string | null;
};

const Card = ({ id, title, icon, text }: CardProps) => {
  const [openEditModal, setOpenEditModal] = useState(false);
  const [deleteValueById] = useDeleteValuesMutation();

  const onCloseEditModal = () => {
    setOpenEditModal(false);
  };

  const handleEdit = () => {
    setOpenEditModal(true);
  };

  const handleDelete = () => {
    deleteValueById(id);
  };
  return (
    <>
      <StyledCard className='card'>
        <div className='card__edit'>
          <CardMenu onEdit={handleEdit} onDelete={handleDelete} />
          {/*<img alt='' src={editSrcIcon} />*/}
        </div>

        <Typography variant='h5' className='card__title'>
          {title}
        </Typography>
        <p className='card__text'>{text}</p>
        <div className='card__img'>
          <img alt='' src={icon || ''} />
          {/*<img alt='' src='../../../../../../public/mock-images/eco.svg' />*/}
        </div>
      </StyledCard>
      <CustomModal open={openEditModal} handleClose={onCloseEditModal}>
        <EditingToolsForOurValuesCard
          content={{
            id: id,
            icon: icon,
            text: text,
            title: title,
          }}
          onCloseEditModal={onCloseEditModal}
        />
      </CustomModal>
    </>
  );
};

export default Card;
