import { useNavigate } from 'react-router-dom';
import { Button, Container, styled, Typography } from '@mui/material';
import { lendingRoutes } from '../../../routers';
import { useAppSelector } from '../../../../../store/hooks.ts';
import { getAddGlobalLanguages } from '../../../../common/sliceCommon/slice.ts';
import { useGetAllHomeQuery } from '../../../../../rtk-query';
import { parseImgBase64 } from '../../../../../utils';
import LoadingSpinner from '../../../../common/loadingSpinner';

export const StyledAboutCompany = styled('div')(
  ({ theme: { breakpoints } }) => ({
    width: '100%',

    gridArea: 'AboutCompany',
    '& .about-company__content': {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem 0',
      padding: '32px 40px',
      backgroundImage: `url('../../../../../../public/images/home-page-about-company-bg.jpg')`,
      // backgroundColor: 'white',

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
        width: 'clamp(100px, 50%, 220px)',
        height: '56px',
      },
    },
    [breakpoints.down('mobileSm')]: {
      backgroundImage: `url('../../../../../../public/images/home-page-about-company-bg.jpg')`,
      padding: '32px 0',
      '& .about-company__content': {
        background: 'unset',
        border: 'unset',
        borderRadius: 'unset',
        padding: '0',

        '& .content__title': {
          fontSize: '20px',
          textAlign: 'center',
        },
        '& .content__text': {
          fontSize: '12px',
        },

        '& .content__img': {
          margin: '0',
        },
        '& button': {
          fontSize: '14px',
          width: 'clamp(100px, 50%, 150px)',
          height: '34px',
        },
      },
    },
  }),
);

const AboutCompany = () => {
  const navigate = useNavigate();
  const lng = useAppSelector(getAddGlobalLanguages);
  const { data, isLoading } = useGetAllHomeQuery(lng);
  const parsedBase64Img = data?.data
    ? parseImgBase64({
        data: data.data.file.data || '',
        type: data.data.file.type || '',
      })
    : '';

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
            {data?.data?.title}
          </Typography>
          <div className='content__text'>{data?.data?.text}</div>
          <div className='content__img'>
            <img alt='' src={parsedBase64Img} />
          </div>
          <Button onClick={() => console.log(navigate(lendingRoutes.ABOUT))}>
            Подробнее
          </Button>
        </div>
      </Container>
    </StyledAboutCompany>
  );
};

export default AboutCompany;
