import { styled, Typography } from '@mui/material';
import EditingTools from '../../../home/components/aboutCompany/EditingTools.tsx';
import CustomModal from '../../../../common/CustomModal.tsx';
import { useState } from 'react';

export const StyledCard = styled('div')(({ theme: { breakpoints } }) => ({
  width: 'clamp(150px, 100%, 250px)',
  height: 'auto',
  backgroundColor: 'white',
  position: 'relative',
  borderRadius: '20px',

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

// type

const Card = () => {
  const [openEditModal, setOpenEditModal] = useState(false);

  const onClickEdit = () => {
    setOpenEditModal(true)
  }
  const onCloseEditModal = () => {
    setOpenEditModal(false);
  };
  return (
    <>
      <StyledCard className='card'>
        <div
          className='card__edit'
          onClick={onClickEdit}
        >
          <img alt='' src='../../../../../../public/svgs/contract_edit.svg' />
        </div>
        <Typography variant='h5' className='card__title'>
          Экология
        </Typography>
        <p className='card__text'>
          Приоритет компании — защита и сохранение экологии. Мы делаем
          конкретные шаги для минимизация влияния золотодобывающего производства
          на окружающую среду.
        </p>
        <div className='card__img'>
          <img alt='' src='../../../../../../public/mock-images/eco.svg' />
        </div>
      </StyledCard>
      <CustomModal open={openEditModal} handleClose={onCloseEditModal}>
        <EditingTools />
      </CustomModal>
    </>
  );
};

export default Card;
