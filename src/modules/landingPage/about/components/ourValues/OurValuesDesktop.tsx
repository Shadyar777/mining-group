import { styled } from '@mui/material';
import Card from './Card.tsx';
import { ValuesResponse } from '../../../../../rtk-query';
import { parseImgBase64 } from '../../../../../utils';

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
        const parsedIconBase64 = data
          ? parseImgBase64({
              data: file.data || '',
              type: file.type || '',
            })
          : null;

        return (
          <Card
            title={title}
            text={text}
            icon={parsedIconBase64}
            id={id}
            key={id}
          />
        );
      })}
    </StyledActivityDesktop>
  );
};

export default OurValuesDesktop;
