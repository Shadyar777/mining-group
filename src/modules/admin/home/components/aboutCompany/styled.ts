import { styled } from '@mui/material';

import imgSrcCompany from '@public/images/home-page-about-company-bg.jpg';

export const StyledAboutCompany = styled('div')(
  ({ theme: { breakpoints } }) => ({
    width: '100%',

    gridArea: 'AboutCompany',
    '& .about-company__content': {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem 0',
      padding: '32px 40px',
      backgroundImage: `url(${imgSrcCompany})`,

      borderRadius: '20px',
      border: '1px solid #F28A2E',

      '& .content__title': {
        color: '#F28A2E',
        fontStyle: 'normal',
        lineHeight: 'normal',
      },
      '& .content__text': {
        color: '#1E1E1E',
        fontSize: '20px',
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
        color: '#FFF',
        fontSize: '24px',
        fontStyle: 'normal',
        fontWeight: '600',
        alignSelf: 'center',
        width: '200px',
      },
    },
    [breakpoints.down('mobileSm')]: {
      backgroundImage: `url(${imgSrcCompany})`,
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
        '& .upload-button': {
          fontSize: '14px',
          width: 'clamp(100px, 50%, 150px)',
          height: '34px',
        },
      },
    },
  }),
);
