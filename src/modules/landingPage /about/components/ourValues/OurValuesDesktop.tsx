import { styled } from '@mui/material';
import Card from './Card.tsx';

export const StyledActivityDesktop = styled('div')(() => ({
  // '& .activity__content': {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '30px',
  height: 'auto',

  '& .card': {
    flex: '1 1 31%',
    padding: '20px 18px',
  },
  // },
}));
const arr = Array.from({ length: 5 }, (_, index) => index + 1);
const OurValuesDesktop = () => {
  return (
    <StyledActivityDesktop>
      {arr.map((_, idx) => (
        <Card key={idx} />
      ))}
    </StyledActivityDesktop>
  );
};

export default OurValuesDesktop;
