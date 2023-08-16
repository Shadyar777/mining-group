import { styled, Typography } from '@mui/material';
import { useState } from 'react';
import CustomModal from '../../../../common/CustomModal.tsx';
import EditingToolsForActivityCard from './EditingToolsForActivityCard.tsx';

import editSrc from '@public/svgs/contract_edit.svg';

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

type CardProps = {
  id: string;
  title: string;
  text: string;
};
const Card = ({ title, text, id }: CardProps) => {
  const [openEditModal, setOpenEditModal] = useState(false);
  const editContent = { title, text, id };

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
          <img alt='' src={editSrc} />
        </div>
        <Typography variant='h5' className='card__title'>
          {title}
        </Typography>
        <p className='card__text'>{text}</p>
      </StyledCard>
      <CustomModal open={openEditModal} handleClose={onCloseEditModal}>
        <EditingToolsForActivityCard
          setOpenEditModal={setOpenEditModal}
          content={{ ...editContent }}
        />
      </CustomModal>
    </>
  );
};

export default Card;
