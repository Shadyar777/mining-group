import { Container, styled, Typography } from '@mui/material';

export const StyledAboutCompany = styled('div')(
  ({ theme: { breakpoints } }) => ({
    width: '100%',

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
  return (
    <StyledAboutCompany>
      <Container maxWidth='md'>
        <div className='about-company__content'>
          <Typography variant='h3' className='content__title'>
            ТОО «INVEST MINING GROUP» 22
          </Typography>
          <div className='content__text'>
            Казахстанская компания, основанная в 2020 году. На данный момент
            компания уже имеет несколько действующих рудников, а также ряд
            месторождений на стадии геологоразведки.
            <br />
            <br />
            Мы продолжаем вкладывать в каждый из наших проектов на территории
            Республики Казахстан. К 2024 году все рудники INVEST MINING GROUPE
            будут работать на полную мощность
            <br />
            <br />
            Казахстанская компания, основанная в 2020 году. На данный момент
            компания уже имеет несколько действующих рудников, а также ряд
            месторождений на стадии геологоразведки.
            <br />
            <br />
            Мы продолжаем вкладывать в каждый из наших проектов на территории
            Республики Казахстан. К 2024 году все рудники INVEST MINING GROUPE
            будут работать на полную мощность
          </div>
          <div className='content__img'>
            <img
              alt=''
              src='../../../../../../public/mock-images/about-company.png'
            />
          </div>
        </div>
      </Container>
    </StyledAboutCompany>
  );
};

export default AboutCompany;
