import { styled } from '@mui/material';
import Card from './Card.tsx';
import { ValuesResponse } from '../../../../../rtk-query';

export const StyledActivityDesktop = styled('div')(() => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '30px',
  height: 'auto',

  '& .card': {
    flex: '1 1 31%',
    padding: '20px 18px',
  },
}));
const OurValuesDesktop = ({ data }: { data: ValuesResponse['data'] }) => {
  return (
    <StyledActivityDesktop>
      {data.map(({ text, id, title, file }) => {
        return <Card title={title} text={text} icon={file} id={id} key={id} />;
      })}
    </StyledActivityDesktop>
  );
};

export default OurValuesDesktop;
