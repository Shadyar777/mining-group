import { useState } from 'react';
import { Divider, styled } from '@mui/material';
import { getArray } from '../../../../../utils/getArray.ts';

// mock
import goldImg from '@public/mock-images/gold.png';
import CubeImg from '@public/svgs/icon-filters/cube.svg';
import CardActionsMenu from './CardActionsMenu.tsx';
import CustomModal from '../../../../common/CustomModal.tsx';
import EditResourceCardForm from './EditResourceCardForm.tsx';

const StyledCard = styled('div')(({ theme: { breakpoints } }) => ({
  borderRadius: '32px',
  overflow: 'hidden',
  background: 'rgba(255, 255, 255, 0.90)',
  color: '#6A6A6A',

  '.card__content': {
    padding: '16px 20px',
  },
  '& .card__img': {
    // maxWidth: '307px',
    width: '100%',
    height: '107px',
    position: 'relative',
    img: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },

    '& .img__more-vert': {
      position: 'absolute',
      top: '16px',
      right: '16px',
      cursor: 'pointer',
      zIndex: '1',
      borderRadius: '50px',
      background: 'rgba(255, 255, 255, 0.90)',
      display: 'flex',
      padding: '3px',
    },
  },
  '& .card__id': {
    textAlign: 'center',
    fontFamily: 'Baloo Da 2', // FIXME - Нужно будет добавить шрифт
    fontSize: '12px',
    fontWeight: 400,
  },
  '& .card__geolocation': {
    color: '#2A2A2A',
    textAlign: 'center',
    fontSize: '16px',
    fontWeight: 600,
  },

  '& .card__resource': {
    display: 'flex',
    flexDirection: 'column',
    gap: '17px',
    '& .card__resource-name': {
      display: 'flex',
      gap: '0 8px',
      alignItems: 'center',
      fontSize: '12px',
      fontWeight: 300,
    },
  },
  '& .card__divider': {
    margin: '8px',
    backgroundColor: '#D9D9D9',
    height: '1px',
  },
  '& .card__price': {
    textAlign: 'center',
    fontSize: '14px',
    fontWeight: 600,
  },
  '& .card__date': {
    textAlign: 'center',
    fontSize: '12px',
    fontWeight: 400,
  },

  [breakpoints.down('sm')]: {},
}));

const Card = () => {
  const [openCardModal, onCloseCardModal] = useState<boolean>(false);

  const handleEdit = () => {
    onCloseCardModal(true);
  };

  const handleDelete = () => {
    console.log('Delete the item');
  };
  const handleClose = () => {
    onCloseCardModal(false);
  };
  return (
    <>
      <StyledCard className='card'>
        <div className='card__img'>
          <CardActionsMenu onEdit={handleEdit} onDelete={handleDelete} />
          <img src={goldImg} alt='' />
        </div>
        <div className='card__content'>
          <div className='card__id'>ID объекта: 36557</div>
          <div className='card__geolocation'>
            Месторождение рассыпного золота
          </div>
          <div className='card__resource'>
            {getArray(3).map((_, key) => (
              <ResourceName
                key={key}
                name='Золото рассыпное'
                iconSrc={CubeImg}
              />
            ))}
          </div>

          <Divider className='card__divider' />
          <div className='card__price'>Цена: по запросу</div>
          <div className='card__date'>Опубликовано 19.06.2023</div>
        </div>
      </StyledCard>
      <CustomModal open={openCardModal} handleClose={handleClose}>
        <EditResourceCardForm />
      </CustomModal>
    </>
  );
};

export default Card;

function ResourceName({ name, iconSrc }: { name: string; iconSrc: string }) {
  return (
    <div className='card__resource-name'>
      <img src={iconSrc} alt='' />
      <div>{name}</div>
    </div>
  );
}
