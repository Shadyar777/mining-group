import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { styled } from '@mui/material';
import CustomModal from '../../../common/CustomModal.tsx';
import EditingToolsForVacancyCard from './EditingToolsForVacancyCard.tsx';

const StyledAddNewVacancy = styled('div')(() => ({
  height: 'auto',
  position: 'relative',
  padding: '12px',
  // flex: '1 1 30%',
  background: 'transparent',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  '& .new-card__block-icon': {
    cursor: 'pointer',
    padding: '20px',
    background: 'rgba(217, 217, 217, 0.50)',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    borderRadius: '50%',
    fontSize: '100px',
  },
}));

const AddNewVacancy = () => {
  const [openAddNewVacancyModal, setOpenAddNewVacancyModal] =
    useState<boolean>(false);

  const onClickNewCard = () => {
    setOpenAddNewVacancyModal(true);
  };
  const onCloseNewCard = () => {
    setOpenAddNewVacancyModal(false);
  };

  return (
    <>
      <StyledAddNewVacancy>
        <div className='new-card__block-icon' onClick={onClickNewCard}>
          <AddIcon fontSize='inherit' />
        </div>
      </StyledAddNewVacancy>
      <CustomModal
        maxwidth='900px'
        open={openAddNewVacancyModal}
        handleClose={onCloseNewCard}
      >
        <EditingToolsForVacancyCard setOpenEdit={setOpenAddNewVacancyModal} />
      </CustomModal>
    </>
  );
};

export default AddNewVacancy;
