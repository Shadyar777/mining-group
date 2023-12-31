import { styled } from '@mui/material';
import Card from './Card.tsx';
import NewCard from './NewCard.tsx';
import { useGetValuesQuery } from '../../../../../rtk-query';
import { useAppSelector } from '../../../../../store/hooks.ts';
import { getAddGlobalLanguages } from '../../../../common/sliceCommon/slice.ts';
import LoadingSpinner from '../../../../common/loadingSpinner';

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
  const { data, isLoading } = useGetValuesQuery(lng);

  if (isLoading) {
    return <LoadingSpinner />;
  }
  return (
    <StyledActivityDesktop>
      {data?.data &&
        data.data.map(({ text, id, title, file }) => {
          return (
            <Card title={title} text={text} icon={file} id={id} key={id} />
          );
        })}
      <NewCard />
    </StyledActivityDesktop>
  );
};

export default OurValuesDesktop;
