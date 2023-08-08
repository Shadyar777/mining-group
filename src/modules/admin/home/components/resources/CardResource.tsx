import { styled } from '@mui/material';

export const StyledCardResource = styled('div')(
  ({ theme: { breakpoints } }) => ({
    width: '186px',
    height: '100px',
    background: '#392C0B',
    borderRadius: '10px',

    '& .card__content': {
      padding: '8px 10px',
      gap: '8px',
      display: 'flex',
      placeItems: 'center',
      height: '100%',
    },
    '& .icon__resource': {},
    '& .content__body': {
      color: '#FFF',
      fontSize: '20px',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: 'normal',

      display: 'flex',
      flexDirection: 'column',
      gap: '5px 0',

      '& div:last-child': {
        color: '#42FF00',
        fontSize: '12px',
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: 'normal',
      },
    },
    [breakpoints.down('mobileSm')]: {
      '& .content__body': {
        fontSize: '14px',

        '& div:last-child': {
          color: '#42FF00',
          fontSize: '10px',
          fontStyle: 'normal',
          fontWeight: '400',
          lineHeight: 'normal',
        },
      },
      '& .icon__resource': {
        width: '48px',
      },
    },
  }),
);

type CardResourceProps = {
  icon?: string;
  nameResource?: string;
  rate?: string;
  percent?: string;
};

const CardResource = ({
  icon = '../../../../../../public/svgs/currency_yen.svg',
  nameResource = 'СNY/KZT',
  rate = '63.34',
  percent = '+0.52 (+0.11%)',
}: CardResourceProps) => {
  return (
    <StyledCardResource>
      <div className='card__content'>
        <div className='icon__resource'>
          <img alt='' src={icon} />
        </div>
        <div className='content__body'>
          <div>{nameResource}</div>
          <div>{rate}</div>
          <div>{percent}</div>
        </div>
      </div>
    </StyledCardResource>
  );
};

export default CardResource;
