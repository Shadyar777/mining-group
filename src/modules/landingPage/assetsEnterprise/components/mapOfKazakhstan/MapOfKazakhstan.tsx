import { Container, styled, Typography } from '@mui/material';
import { useAppSelector } from '../../../../../store/hooks.ts';
import { getAddGlobalLanguages } from '../../../../common/sliceCommon/slice.ts';
import { useGetGeoProdQuery } from '../../../../../rtk-query';
import { parseImgBase64 } from '../../../../../utils';
import LoadingSpinner from '../../../../common/loadingSpinner';

const StyledMapOfKazakhstan = styled('div')(({ theme: { breakpoints } }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '120px',

  '& .map__content': {
    display: 'flex',
    flexDirection: 'column',
    placeItems: 'center',
    marginTop: '50px',
  },
  '& .map__image': {
    width: 'clamp(100%, 50%, 700px)',
    img: {
      width: '100%',
      height: '100%',
    },
  },
  '& .map__text': {
    marginTop: '60px',
    display: 'flex',
    flexDirection: 'column',
    '& .text__quote': {
      color: '#F28A2E',
      fontSize: '36px',
      fontWeight: '500',
      alignSelf: 'start',
    },
    '& .text__author': {
      color: '#004B8F',
      fontSize: '24px',
      fontWeight: '500',
      alignSelf: 'end',
    },
  },

  [breakpoints.down('sm')]: {
    gap: '60px',

    '& .map__content': {
      marginTop: '0px',
    },
    '& .map__image': {
      img: {},
    },
    '& .map__text': {
      padding: '10px 0',
      '& .text__quote': {
        fontSize: '20px',
      },
      '& .text__author': {
        marginTop: '24px',
        fontSize: '16px',
      },
    },
  },
}));

const MapOfKazakhstan = () => {
  const lng = useAppSelector(getAddGlobalLanguages);
  const { data, isLoading } = useGetGeoProdQuery(lng);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (!data) {
    return;
  }

  const parsedIconBase64 = data?.data?.file?.data
    ? parseImgBase64({
        data: data.data.file.data || '',
        type: data.data.file.type || '',
      })
    : 'null';
  return (
    <StyledMapOfKazakhstan>
      <Container maxWidth='md'>
        <div className='map__content'>
          <Typography marginBottom='20px' className='text__title' variant='h3'>
            {data.data?.title ?? ''}
          </Typography>
          <div className='map__image'>
            <img alt={data.data?.title ?? '#'} src={parsedIconBase64} />
          </div>
          <div className='map__text'>
            <Typography className='text__quote'>
              {data.data?.quotes ?? ''}
            </Typography>
            <Typography className='text__author'>
              {data.data?.author ?? ''}
            </Typography>
          </div>
        </div>
      </Container>
    </StyledMapOfKazakhstan>
  );
};

export default MapOfKazakhstan;
