import { styled } from '@mui/material';
import Card from './Card.tsx';
import { getArray } from '../../../../../utils/getArray.ts';

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
const OurValuesDesktop = () => {
  return (
    <StyledActivityDesktop>
      {getArray(5).map((_, idx) => (
        <Card key={idx} />
      ))}
    </StyledActivityDesktop>
  );
};

export default OurValuesDesktop;
