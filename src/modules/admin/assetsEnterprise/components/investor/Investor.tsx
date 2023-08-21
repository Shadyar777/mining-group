import {
  Container,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import Card from './Card.tsx';
import MenuFilters from './MenuFilters.tsx';
import NewCard from './NewCard.tsx';
import { useGetFieldsQuery } from '../../../../../rtk-query';
import Pagination from './Pagination.tsx';
import { ChangeEvent, useEffect, useState } from 'react';
import { QueryFieldsParams } from '../../../../../rtk-query/types/fields-types.ts';
import { useAppSelector } from '../../../../../store/hooks.ts';
import { getAddGlobalLanguages } from '../../../../common/sliceCommon/slice.ts';

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
    backgroundColor: '#FFF8EC',
  },
}));

const Investor = () => {
  const lng = useAppSelector(getAddGlobalLanguages);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('mobileSm'));
  const [fieldsParams, setFieldsParams] = useState<QueryFieldsParams>({
    title: '',
    resources: ['Золото рассыпное'],
    orderBy: 'new',
    limit: isMobile ? 4 : 10,
    page: 1,
  });

  const { data } = useGetFieldsQuery(fieldsParams);

  const onChangePagination = (_: ChangeEvent<unknown>, page: number) => {
    setFieldsParams((prevState) => ({ ...prevState, page }));
  };

  useEffect(() => {
    setFieldsParams((prevState) => ({ ...prevState, language: lng }));
  }, [lng]);

  if (!data) {
    return;
  }

  const { listFields } = data.data.listFields;
  return (
    <StyledInvestor>
      <Container maxWidth='md'>
        <div className='investor__titles'>
          <Typography className='title' variant='h3'>
            Инвесторам
          </Typography>
          <Typography className='sub-title'>Месторождения</Typography>
        </div>
        <MenuFilters setFieldsParams={setFieldsParams} />
        <div className='investor__content'>
          <NewCard />
          {listFields.map((item, key) => (
            <Card {...item} key={key} />
          ))}
        </div>

        <Pagination
          count={data.data.listFields.allPageCount}
          onChange={onChangePagination}
        />
      </Container>
    </StyledInvestor>
  );
};

export default Investor;
