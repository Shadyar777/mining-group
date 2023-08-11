import { styled, Typography } from '@mui/material';
import { useState } from 'react';
import CustomModal from '../../../../common/CustomModal.tsx';
import EditingToolsForActivityCard from './EditingToolsForActivityCard.tsx';

export const StyledCard = styled('div')(({ theme: { breakpoints } }) => ({
  height: 'auto',
  backgroundColor: 'white',
  position: 'relative',
  borderRadius: '20px',
  padding: '12px',

  '& .card__title': {
    color: '#F28A2E',
    fontSize: '24px',
    fontWeight: ' 600',
  },
  '& .card__text': {
    color: '#000',
    fontSize: '20px',
    fontWeight: '300',
  },

  '& .card__edit': {
    cursor: 'pointer',
    alignSelf: 'center',
    display: 'flex',
    justifyContent: 'end',
  },

  [breakpoints.down('mobileSm')]: {
    '& .card__title': {
      fontSize: '16px',
    },
    '& .card__text': {
      fontSize: '12px',
    },
  },
}));

const emptyContent = {
  title: 'Развитие активов:',
  text: 'Проведение технического аудита Оценка запасов по стандарту JORC. Разработка стратегии дальнейшего развития. Разработка проектной документации по международным стандартам. Управление проектами.',
};

const Card = () => {
  const [openEditModal, setOpenEditModal] = useState(false);

  const onClickEdit = () => {
    setOpenEditModal(true);
  };
  const onCloseEditModal = () => {
    setOpenEditModal(false);
  };
  return (
    <>
      <StyledCard className='card'>
        <div className='card__edit' onClick={onClickEdit}>
          <img alt='' src='../../../../../../public/svgs/contract_edit.svg' />
        </div>
        <Typography variant='h5' className='card__title'>
          Развитие активов:
        </Typography>
        <p className='card__text'>
          Проведение технического аудита Оценка запасов по стандарту JORC.
          Разработка стратегии дальнейшего развития. Разработка проектной
          документации по международным стандартам. Управление проектами.
        </p>
      </StyledCard>
      <CustomModal open={openEditModal} handleClose={onCloseEditModal}>
        <EditingToolsForActivityCard content={{ ...emptyContent }} />
      </CustomModal>
    </>
  );
};

export default Card;
