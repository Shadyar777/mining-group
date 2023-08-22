import { Divider, styled } from '@mui/material';
import { memo } from 'react';
import { BackgroundImageFiles } from '../../../../../rtk-query/types/fields-types.ts';
import { parseImgBase64 } from '../../../../../utils';
import { getIconForResource } from '../../../../common/utls/getIconForResource.ts';
import { currencyFormat } from '../../../../common/utls/currencyFormat.ts';
import { formatDate } from '../../../../common/utls/formatDate.ts';

import arrowIcon from '@public/svgs/arrow-forward-sharp.svg';

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

    '& .img__arrow-icon': {
      position: 'absolute',
      top: '16px',
      right: '16px',
      width: '32px',
      height: '32px',
      cursor: 'pointer',
      zIndex: '1',
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

type CardProps = {
  id: number;
  title: string;
  resources: string[];
  price: number;
  createdDate: string;
  backgroundImageFiles?: BackgroundImageFiles;
  handleOpenModal: (value: number) => void;
};

const Card = memo(
  ({
    id,
    title,
    backgroundImageFiles,
    resources,
    createdDate,
    price,
    handleOpenModal,
  }: CardProps) => {
    const parsedImgBase64 = backgroundImageFiles
      ? parseImgBase64({
          data: backgroundImageFiles.data || '',
          type: backgroundImageFiles.type || '',
        })
      : '';

    return (
      <StyledCard className='card'>
        <div className='card__img'>
          <img src={parsedImgBase64} alt={title} />
          <img
            className='img__arrow-icon'
            src={arrowIcon}
            alt=''
            onClick={() => handleOpenModal(id)}
          />
        </div>
        <div className='card__content'>
          <div className='card__id'>ID объекта: {id}</div>
          <div className='card__geolocation'>{title}</div>
          <div className='card__resource'>
            {resources.map((resource, key) => (
              <ResourceName
                name={resource}
                iconSrc={getIconForResource(resource)}
                key={`${resource}-${key}`}
              />
            ))}
          </div>

          <Divider className='card__divider' />
          {/*<Divider variant='middle' />*/}
          <div className='card__price'>
            Цена: {currencyFormat(Number(price))}
          </div>
          <div className='card__date'>
            Опубликовано {formatDate(createdDate)}
          </div>
        </div>
      </StyledCard>
    );
  },
);

export default Card;

function ResourceName({
  name,
  iconSrc,
}: {
  name: string;
  iconSrc: JSX.Element | null;
}) {
  return (
    <div className='card__resource-name'>
      {/*<img src={iconSrc} alt='' />*/}
      {iconSrc ?? 'icon ('}
      <div>{name}</div>
    </div>
  );
}
