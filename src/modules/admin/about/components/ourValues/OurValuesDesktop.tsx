import { styled } from '@mui/material';
import Card from './Card.tsx';
import NewCard from './NewCard.tsx';
import { useGetValuesQuery } from '../../../../../rtk-query';
import { useAppSelector } from '../../../../../store/hooks.ts';
import { getAddGlobalLanguages } from '../../../../common/sliceCommon/slice.ts';
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

const OurValuesDesktop = () => {
  const lng = useAppSelector(getAddGlobalLanguages);
  const { data } = useGetValuesQuery(lng);
  return (
    <StyledActivityDesktop>
      {data?.data &&
        data.data.map(({ text, id, title, file }) => {
          const parsedIconBase64 = data?.data
            ? parseImgBase64({
                data: file.data || '',
                type: file.type || '',
              })
            : null;

          return (
            <Card
              title={title}
              text={text}
              // icon={file.data || null}
              icon={parsedIconBase64}
              id={id}
              key={id}
            />
          );
        })}
      <NewCard />
    </StyledActivityDesktop>
  );
};

export default OurValuesDesktop;
