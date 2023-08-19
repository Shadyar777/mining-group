import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { styled } from '@mui/material';
import CustomModal from '../../../../common/CustomModal.tsx';
import EditingToolsForOurValuesCard from './EditingToolsForOurValuesCard.tsx';

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
  icon: null,
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
        <EditingToolsForOurValuesCard
          content={{ ...emptyContent }}
          onCloseEditModal={onCloseNewCard}
        />
      </CustomModal>
    </>
  );
};

export default NewCard;
