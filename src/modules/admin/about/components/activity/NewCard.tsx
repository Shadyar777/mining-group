import AddIcon from '@mui/icons-material/Add';
import { styled } from '@mui/material';
import CustomModal from '../../../../common/CustomModal.tsx';
import EditingToolsForActivityCard from './EditingToolsForActivityCard.tsx';
import { useState } from 'react';

const StyledNewCard = styled('div')(() => ({
  height: 'auto',
  position: 'relative',
  padding: '12px',
  flex: '1 1 48%',
  background: 'transparent',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  '& .new-card__block-icon': {
    cursor: 'pointer',
    borderRadius: '50%',
    padding: '20px',
    background: 'rgba(217, 217, 217, 0.50)',
    display: 'inline-flex',
    color: 'white',
    fontSize: '100px',
  },
}));

const emptyContent = {
  title: '',
  text: '',
};

const NewCard = () => {
  const [openNewCardModal, setOpenNewCardModal] = useState(false);

  const onClickNewCard = () => {
    setOpenNewCardModal(true);
  };
  const onCloseNewCard = () => {
    setOpenNewCardModal(false);
  };

  return (
    <>
      <StyledNewCard>
        <div className='new-card__block-icon' onClick={onClickNewCard}>
          <AddIcon fontSize='inherit' />
        </div>
      </StyledNewCard>
      <CustomModal open={openNewCardModal} handleClose={onCloseNewCard}>
        <EditingToolsForActivityCard
          setOpenEditModal={setOpenNewCardModal}
          content={{ ...emptyContent }}
        />
      </CustomModal>
    </>
  );
};

export default NewCard;
