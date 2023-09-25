import { Divider, styled } from '@mui/material';
import { memo, ReactElement } from 'react';
import { getIconForResource } from '../../../../common/utls/getIconForResource.ts';
import { currencyFormat } from '../../../../common/utls/currencyFormat.ts';
import { formatDate } from '../../../../common/utls/formatDate.ts';

import arrowIcon from '@public/svgs/arrow-forward-sharp.svg';
import { useTranslation } from 'react-i18next';
import { isAN } from '../../../../../utils/isAN.ts';

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
    fontFamily: 'inherit',
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
  price: string;
  createdDate: string;
  backgroundImageFiles?: string;
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
    const { t } = useTranslation('translation', {
      keyPrefix: 'assetsEnterprise',
    });

    return (
      <StyledCard className='card'>
        <div className='card__img'>
          <img src={backgroundImageFiles} alt={title} />
          <img
            className='img__arrow-icon'
            src={arrowIcon}
            alt=''
            onClick={() => handleOpenModal(id)}
          />
        </div>
        <div className='card__content'>
          <div className='card__id'>
            {t('objectID')} {id}
          </div>
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
            {t('price')}{' '}
            {isAN(Number(price)) ? currencyFormat(Number(price)) : price}
          </div>
          <div className='card__date'>
            {t('Published')} {formatDate(createdDate)}
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
  iconSrc: ReactElement | null;
}) {
  return (
    <div className='card__resource-name'>
      {/*<img src={iconSrc} alt='' />*/}
      {iconSrc ?? 'icon ('}
      <div>{name}</div>
    </div>
  );
}
