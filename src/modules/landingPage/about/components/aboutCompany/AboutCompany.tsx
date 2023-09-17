import { Container, styled, Typography } from '@mui/material';
import { useAppSelector } from '../../../../../store/hooks.ts';
import { getAddGlobalLanguages } from '../../../../common/sliceCommon/slice.ts';
import { useGetAllHomeQuery } from '../../../../../rtk-query';
import LoadingSpinner from '../../../../common/loadingSpinner';

export const StyledAboutCompany = styled('div')(
  ({ theme: { breakpoints } }) => ({
    width: '100%',
    padding: '40px 0',

    '& .about-company__content': {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem 0',
      padding: '32px 40px',
      background: 'white',

      borderRadius: '20px',
      border: '1px solid #F28A2E',

      '& .content__title': {
        color: '#F28A2E',
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
      '& button': {
        color: '#FFF',
        fontSize: '24px',
        fontStyle: 'normal',
        fontWeight: '600',
        lineHeight: 'normal',
        textTransform: 'none',
        alignSelf: 'center',
        background: '#FFB940',
        width: 'clamp(100px, 100%, 220px)',
        height: '56px',
      },

      [breakpoints.down('mobileSm')]: {
        background: 'unset',
        border: 'unset',
        borderRadius: 'unset',
        padding: '0',

        '& .content__title': {
          fontSize: '20px',
        },
        '& .content__text': {
          fontSize: '12px',
        },
      },
    },
  }),
);

const AboutCompany = () => {
  const lng = useAppSelector(getAddGlobalLanguages);
  const { data, isLoading } = useGetAllHomeQuery(lng);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (!data) {
    return;
  }

  return (
    <StyledAboutCompany>
      <Container maxWidth='md'>
        <div className='about-company__content'>
          <Typography variant='h3' className='content__title'>
            {data?.data?.title || ''}
          </Typography>
          <div className='content__text'>{data?.data?.text || ''}</div>
          <div className='content__img'>
            <img alt='' src={data?.data?.file} />
          </div>
        </div>
      </Container>
    </StyledAboutCompany>
  );
};

export default AboutCompany;
