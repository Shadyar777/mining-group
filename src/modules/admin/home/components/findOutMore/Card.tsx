import { useState } from 'react';
import { styled, Typography } from '@mui/material';
import CustomModal from '../../../../common/CustomModal.tsx';
import EditingTools from './EditingTools.tsx';

import srcEditIcon from '@public/images/contract_edit.png';
import { TitleResponse } from '../../../../../rtk-query';
import { parseImgBase64 } from '../../../../../utils';

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
type CardProps = {
  id: string | number;
  title: string;
  text: string;
  file?: TitleResponse['data']['0']['file'] | null;
};
const Card = ({ id, text, title, file }: CardProps) => {
  const [openEditModal, setOpenEditModal] = useState(false);

  const parsedIconBase64 = file
    ? parseImgBase64({
        data: file.data || '',
        type: file.type || '',
      })
    : '';
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
          <img alt='' src={parsedIconBase64} />
          <div className='card__edit' onClick={onClickEdit}>
            <img alt='edit' src={srcEditIcon} />
          </div>
        </div>
        <Typography variant='h4' className='card__title'>
          {title}
        </Typography>
        <Typography variant='body1' className='card__text'>
          {text}
        </Typography>
      </StyledCard>
      <CustomModal open={openEditModal} handleClose={onCloseEditModal}>
        <EditingTools
          id={id}
          text={text}
          title={title}
          file={file}
          onCloseEditModal={onCloseEditModal}
        />
      </CustomModal>
    </>
  );
};

export default Card;
