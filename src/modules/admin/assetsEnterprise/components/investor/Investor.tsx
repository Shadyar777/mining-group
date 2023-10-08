import { ChangeEvent, useState } from 'react';
import {
  Box,
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
import { QueryFieldsParams } from '../../../../../rtk-query/types/fields-types.ts';
import { useAppSelector } from '../../../../../store/hooks.ts';
import { getAddGlobalLanguages } from '../../../../common/sliceCommon/slice.ts';
import LoadingSpinner from '../../../../common/loadingSpinner';

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
      fontSize: '24px',
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
    resources: [],
    orderBy: 'new',
    limit: isMobile ? 4 : 9,
    page: 1,
    language: lng,
  });

  const { data, isLoading, isFetching } = useGetFieldsQuery(fieldsParams);

  const onChangePagination = (_: ChangeEvent<unknown>, page: number) => {
    setFieldsParams((prevState) => ({ ...prevState, page }));
  };

  if (!data) {
    return;
  }

  const { listFields } = data.data.listFields;
  return (
    <StyledInvestor>
      <Container maxWidth='md'>
        <div className='investor__titlaes'>
          <Typography className='title' variant='h3'>
            Инвесторам
          </Typography>
          <Typography className='sub-title'>Месторождения</Typography>
        </div>
        <MenuFilters
          setFieldsParams={setFieldsParams}
          paramResources={fieldsParams.resources}
        />
        <div className='investor__content'>
          {isLoading || isFetching ? null : <NewCard />}
          {isLoading || isFetching ? (
            <Box
              display='flex'
              justifyContent='center'
              alignItems='center'
              width='100%'
            >
              <LoadingSpinner customHeight='100%' />
            </Box>
          ) : (
            listFields.map((item, key) => <Card {...item} key={key} />)
          )}
        </div>

        <Pagination
          count={data.data.listFields.allPageCount}
          onChange={onChangePagination}
          page={fieldsParams.page}
        />
      </Container>
    </StyledInvestor>
  );
};

export default Investor;
