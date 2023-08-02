import { Container, styled, Typography } from '@mui/material';

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
  return (
    <StyledStrategy>
      <Container maxWidth='md'>
        <div className='strategy__content'>
          <Typography variant='h4' className='content__title'>
            Стратегия
          </Typography>
          <div className='content__text'>
            Основной стратегией развития компании является управление
            горно-рудными проектами на всех стадиях развития: от начальной
            стадии поиска и разведки, технико-экономического обоснования,
            проектирования и строительства, до управления на этапе производства.
            <br />
            <br />
            Дополнительной стратегией развития является сопровождение сделок по
            продажам и слиянию активов.
          </div>
          <div className='content__img'>
            <img
              alt=''
              src='../../../../../../public/mock-images/about-company.png'
            />
          </div>
        </div>
      </Container>
    </StyledStrategy>
  );
};

export default Strategy;
