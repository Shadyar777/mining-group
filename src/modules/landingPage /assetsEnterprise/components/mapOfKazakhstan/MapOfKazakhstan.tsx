import { Container, styled, Typography } from '@mui/material';

const StyledMapOfKazakhstan = styled('div')(({ theme: { breakpoints } }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '120px',

  '& .map__content': {
    display: 'flex',
    flexDirection: 'column',
    placeItems: 'center',
  },
  '& .map__image': {
    width: 'clamp(100%, 50%, 700px)',
    img: {
      width: '100%',
      height: '100%',
    },
  },
  '& .map__text': {
    marginTop: '120px',
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

    '& .map__content': {},
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
  // [breakpoints.down('mobileSm')]: {
  //   flexDirection: 'unset',
  //   display: 'unset',
  //   gap: 'unset',
  // },
}));

const MapOfKazakhstan = () => {
  return (
    <StyledMapOfKazakhstan>
      <Container maxWidth='md'>
        <div className='map__content'>
          <div className='map__image'>
            <img
              alt=''
              src='../../../../../../public/images/map-of-kazakhstan.png'
            />
          </div>
          <div className='map__text'>
            <Typography className='text__quote'>
              «Мы обязаны не только разрабатывать наши кладовые подземных
              ископаемых, но и беречь их!»
            </Typography>
            <Typography className='text__author'>К.Сатпаев</Typography>
          </div>
        </div>
      </Container>
    </StyledMapOfKazakhstan>
  );
};

export default MapOfKazakhstan;
