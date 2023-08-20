import { Container, styled, Typography } from '@mui/material';
import Card from './Card.tsx';
import { getArray } from '../../../../../utils/getArray.ts';
import MenuFilters from './MenuFilters.tsx';

const StyledInvestor = styled('div')(({ theme: { breakpoints } }) => ({
  padding: '40px 0',

  '& .investor__titles': {
    '& .title': {
      color: '#392C0B',
      textAlign: 'center',
    },
    '& .sub-title': {
      color: '#392C0B',
      textAlign: 'center',
      fontSize: '36px',
      fontWeight: 400,
    },
  },
  // '& .investor__filters': {
  //   '& .filters__icon': {},
  //   '& .filters__label': {
  //     color: '#000',
  //     fontSize: '16px',
  //     fontWeight: 400,
  //   },
  //   '& .filters__search': {
  //     borderRadius: '30px',
  //     background: 'rgba(255, 255, 255, 0.90)',
  //   },
  // },
  '& .investor__content': {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '30px',
    height: 'auto',

    '& .card': {
      flex: '1 1 30%',
    },
  },

  [breakpoints.down('sm')]: {
    backgroundColor: '#FFF8EC',
  },
}));

const Investor = () => {
  return (
    <StyledInvestor>
      <Container maxWidth='md'>
        <div className='investor__titles'>
          <Typography className='title' variant='h3'>
            Инвесторам
          </Typography>
          <Typography className='sub-title'>Месторождения</Typography>
        </div>
        <MenuFilters />
        {/*<div className='investor__filters'>*/}
        {/*  <div>*/}
        {/*    <div className='filters__icon'>*/}
        {/*      <img alt='' src='../../../../../../public/svgs/icon-filter.svg' />*/}
        {/*    </div>*/}
        {/*    <div className='filters__label'>Фильтры</div>*/}
        {/*  </div>*/}
        {/*  <div className='filters__search'>*/}
        {/*    <input type='text' />*/}
        {/*  </div>*/}
        {/*</div>*/}
        <div className='investor__content'>
          {getArray(6).map((_, key) => (
            <Card key={key} />
          ))}
        </div>
      </Container>
    </StyledInvestor>
  );
};

export default Investor;
