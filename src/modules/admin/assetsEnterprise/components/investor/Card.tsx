import { memo, ReactElement, useState } from 'react';
import { Divider, styled } from '@mui/material';
import CardActionsMenu from './CardActionsMenu.tsx';
import CustomModal from '../../../../common/CustomModal.tsx';
import EditResourceCardForm from './EditResourceCardForm.tsx';
import { getIconForResource } from '../../../../common/utls/getIconForResource.ts';
import { formatDate } from '../../../../common/utls/formatDate.ts';
import { currencyFormat } from '../../../../common/utls/currencyFormat.ts';
import { useDeleteFieldsMutation } from '../../../../../rtk-query';
import { parseImgBase64 } from '../../../../../utils';
import { BackgroundImageFiles } from '../../../../../rtk-query/types/fields-types.ts';

const StyledCard = styled('div')(({ theme: { breakpoints } }) => ({
  borderRadius: '32px',
  overflow: 'hidden',
  background: 'rgba(255, 255, 255, 0.90)',
  color: '#6A6A6A',
  display: 'flex',
  flexDirection: 'column',

  '.card__content': {
    padding: '16px 20px',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  '& .card__img': {
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
    flex: '1 0 auto',
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

type CardProps = {
  id: number;
  title: string;
  resources: string[];
  price: number;
  createdDate: string;
  backgroundImageFiles?: BackgroundImageFiles;
};

const Card = memo(
  ({
    id,
    title,
    backgroundImageFiles,
    resources,
    createdDate,
    price,
  }: CardProps) => {
    const [openCardModal, onCloseCardModal] = useState<boolean>(false);

    const [deleteFields] = useDeleteFieldsMutation();

    const parsedImgBase64 = backgroundImageFiles
      ? parseImgBase64({
          data: backgroundImageFiles.data || '',
          type: backgroundImageFiles.type || '',
        })
      : '';

    const handleEdit = () => {
      onCloseCardModal(true);
    };

    const handleDelete = () => {
      deleteFields({ id });
    };
    const handleClose = () => {
      onCloseCardModal(false);
    };
    return (
      <>
        <StyledCard className='card'>
          <div className='card__img'>
            <CardActionsMenu onEdit={handleEdit} onDelete={handleDelete} />
            <img src={parsedImgBase64} alt={title} />
          </div>
          <div className='card__content'>
            <div className='card__id'>ID объекта: {id}</div>
            <div className='card__geolocation'>{title}</div>
            <div className='card__resource'>
              {resources?.map((resource, key) => (
                <ResourceName
                  name={resource}
                  iconSrc={getIconForResource(resource)}
                  key={`${resource}-${key}`}
                />
              ))}
            </div>

            <Divider className='card__divider' />
            <div className='card__price'>
              Цена: {currencyFormat(Number(price))}
            </div>
            <div className='card__date'>
              Опубликовано {formatDate(createdDate)}
            </div>
          </div>
        </StyledCard>
        <CustomModal open={openCardModal} handleClose={handleClose}>
          <EditResourceCardForm id={id} handleClose={handleClose} />
        </CustomModal>
      </>
    );
  },
);

export default Card;

function ResourceName({
  name,
  iconSrc,
}: {
  name: string;
  iconSrc: ReactElement | null;
}) {
  return (
    <div className='card__resource-name'>
      {iconSrc ?? 'icon ('}
      <div>{name}</div>
    </div>
  );
}
