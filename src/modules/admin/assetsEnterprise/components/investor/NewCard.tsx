import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { styled } from '@mui/material';
import CustomModal from '../../../../common/CustomModal.tsx';
import EditResourceCardForm from './EditResourceCardForm.tsx';

const StyledNewCard = styled('div')(() => ({
  height: 'auto',
  position: 'relative',
  padding: '12px',
  flex: '1 1 30%',
  background: 'transparent',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  '& .new-card__block-icon': {
    cursor: 'pointer',
    borderRadius: '20px',
    padding: '20px',
    background: 'rgba(217, 217, 217, 0.50)',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    width: '100%',
    height: '100%',
    fontSize: '100px',
  },
}));

const NewCard = () => {
  const [openNewCardModal, setOpenNewCardModal] = useState<boolean>(false);

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
        <EditResourceCardForm />
      </CustomModal>
    </>
  );
};

export default NewCard;
