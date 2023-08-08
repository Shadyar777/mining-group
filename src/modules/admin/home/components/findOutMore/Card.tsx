import { styled, Typography } from '@mui/material';
import CustomModal from '../../../../common/CustomModal.tsx';
import { useState } from 'react';
import EditingTools from '../aboutCompany/EditingTools.tsx';

export const StyledCard = styled('div')(({ theme: { breakpoints } }) => ({
  // width: '100%',
  padding: '20px 0',
  display: 'flex',
  flexDirection: 'column',

  '& .card__img': {
    position: 'relative',
    width: 'clamp(150px, 100%, 300px)',
    height: '300px',
    borderRadius: '20px',
    border: '3px solid #FFB940',
    overflow: 'hidden',
    marginBottom: '20px',

    '& .card__edit': {
      position: 'absolute',
      cursor: 'pointer',
      top: '5px',
      right: '10px',
    },

    img: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
  },
  '& .card__title': {
    width: 'clamp(150px, 100%, 250px)',
    flexWrap: 'wrap',
  },
  '& .card__text': {
    width: 'clamp(150px, 100%, 250px)',
    flexWrap: 'wrap',
    fontSize: '20px',
    fontStyle: 'normal',
    fontWeight: '400',
  },
  [breakpoints.down('mobileSm')]: {
    '& .card__title': {
      fontSize: '16px',
    },
    '& .card__text': {
      fontSize: '10px',
    },
    '& .card__img': {
      width: 'clamp(150px, 100%, 300px)',
      height: '200px',

      img: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
      },
    },
  },
}));

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
      <StyledCard>
        <div className='card__img'>
          <img
            alt=''
            src='../../../../../../public/mock-images/about-company.png'
          />
          <div className='card__edit' onClick={onClickEdit}>
            <img
              alt=''
              src='../../../../../../public/images/contract_edit.png'
            />
          </div>
        </div>
        <Typography variant='h4' className='card__title'>
          О компании
        </Typography>
        <Typography variant='body1' className='card__text'>
          Виды деятельности. Стратегия
        </Typography>
      </StyledCard>
      <CustomModal open={openEditModal} handleClose={onCloseEditModal}>
        <EditingTools />
      </CustomModal>
    </>
  );
};

export default Card;
