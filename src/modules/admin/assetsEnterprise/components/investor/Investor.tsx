import { Container, styled, Typography } from '@mui/material';
import Card from './Card.tsx';
import { getArray } from '../../../../../utils/getArray.ts';
import MenuFilters from './MenuFilters.tsx';
import NewCard from './NewCard.tsx';

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
    // gap: '60px',
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
        <div className='investor__content'>
          <NewCard />
          {getArray(6).map((_, key) => (
            <Card key={key} />
          ))}
        </div>
      </Container>
    </StyledInvestor>
  );
};

export default Investor;
