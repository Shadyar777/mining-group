import {
  Container,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import Card from './Card.tsx';
import MenuFilters from './MenuFilters.tsx';
import { useAppSelector } from '../../../../../store/hooks.ts';
import { getAddGlobalLanguages } from '../../../../common/sliceCommon/slice.ts';
import { ChangeEvent, useEffect, useState } from 'react';
import { QueryFieldsParams } from '../../../../../rtk-query/types/fields-types.ts';
import { useGetFieldsQuery } from '../../../../../rtk-query';
import LoadingSpinner from '../../../../common/loadingSpinner';
import Pagination from '../../../../admin/assetsEnterprise/components/investor/Pagination.tsx';
import CustomModal from './CustomModal.tsx';

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
  const [cardId, setCardId] = useState<number>(0);
  const isMobile = useMediaQuery(theme.breakpoints.down('mobileSm'));
  const [fieldsParams, setFieldsParams] = useState<QueryFieldsParams>({
    title: '',
    resources: [],
    orderBy: 'new',
    limit: isMobile ? 4 : 9,
    page: 1,
  });

  const [open, setOpen] = useState(false);

  const handleOpenModal = (value: number) => {
    setCardId(value);
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  const { data, isLoading } = useGetFieldsQuery(fieldsParams);

  const onChangePagination = (_: ChangeEvent<unknown>, page: number) => {
    setFieldsParams((prevState) => ({ ...prevState, page }));
  };

  useEffect(() => {
    setFieldsParams((prevState) => ({ ...prevState, language: lng }));
  }, [lng]);

  if (isLoading || !data) {
    return <LoadingSpinner />;
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
          {listFields.map((item, key) => (
            <Card {...item} key={key} handleOpenModal={handleOpenModal} />
          ))}
        </div>
        <CustomModal id={cardId} open={open} onClose={handleCloseModal} />
        <Pagination
          count={data.data.listFields.allPageCount}
          onChange={onChangePagination}
        />
      </Container>
    </StyledInvestor>
  );
};

export default Investor;
