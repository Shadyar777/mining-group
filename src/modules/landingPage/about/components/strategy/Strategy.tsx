import { Container, styled, Typography } from '@mui/material';
import { useAppSelector } from '../../../../../store/hooks.ts';
import { getAddGlobalLanguages } from '../../../../common/sliceCommon/slice.ts';
import { useGetStrategyQuery } from '../../../../../rtk-query';
import { parseImgBase64 } from '../../../../../utils';

export const StyledStrategy = styled('div')(({ theme: { breakpoints } }) => ({
  width: '100%',

  '& .strategy__content': {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem 0',
    padding: '32px 40px',
    background: 'white',

    borderRadius: '20px',
    border: '1px solid #F28A2E',

    '& .content__title': {
      color: '#004B8F',
      fontStyle: 'normal',
      lineHeight: 'normal',
    },
    '& .content__text': {
      color: '#1E1E1E',
      fontSize: '26px',
      fontStyle: 'normal',
      fontWeight: '300',
      lineHeight: 'normal',
    },
    '& .content__img': {
      margin: '32px 0',
      img: {
        width: '100%',
      },
    },

    '& .upload-button': {
      width: '200px',
      alignSelf: 'center',
    },

    [breakpoints.down('mobileSm')]: {
      border: 'unset',
      padding: '24px 0 0 0',
      '& .content__title': {
        fontSize: '20px',
      },
      '& .content__text': {
        fontSize: '12px',
      },
    },
  },
}));

const Strategy = () => {
  const lng = useAppSelector(getAddGlobalLanguages);
  const { data } = useGetStrategyQuery(lng);

  if (!data) {
    return;
  }

  const parsedImagBase64 = data?.data
    ? parseImgBase64({
        data: data?.data?.file.data || '',
        type: data?.data?.file.type || '',
      })
    : '';
  return (
    <StyledStrategy>
      <Container maxWidth='md'>
        <div className='strategy__content'>
          <Typography variant='h3' className='content__title'>
            {data.data.title}
          </Typography>

          <div className='content__text'>{data.data.text}</div>
          <div className='content__img'>
            <img src={parsedImagBase64} alt={data.data.title || ''} />
          </div>
        </div>
      </Container>
    </StyledStrategy>
  );
};

export default Strategy;
