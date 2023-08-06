import { Container, styled, useMediaQuery, useTheme } from '@mui/material';
import Carousel from 'react-multi-carousel';
import { getArray } from '../../../../../utils/getArray.ts';

const responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024,
    },
    items: 1,
  },
  mobile: {
    breakpoint: {
      max: 464,
      min: 0,
    },
    items: 1,
  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 464,
    },
    items: 1,
  },
};

const StyledSlider = styled('div')(({ theme: { breakpoints, shape } }) => ({
  background: '#FFF8EC',
  '& .container[dir="ltr"]': {
    borderRadius: shape.borderRadius,
  },
  [breakpoints.down('sm')]: {},
  [breakpoints.down('mobileSm')]: {
    padding: '32px 0',
    '& .container[dir="ltr"]': {
    },
  },
}));

const arrImg = getArray(6).map((_, idx) => {
  return (
    <img
      key={idx}
      alt=''
      src='https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
      style={{
        display: 'block',
        height: '100%',
        margin: 'auto',
        width: '100%',
      }}
    />
  );
});
const Slider = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('mobileSm'));
  return (
    <StyledSlider>
      <Container maxWidth='md' disableGutters={isMobile}>
        <Carousel
          additionalTransfrom={0}
          arrows={!isMobile}
          autoPlaySpeed={3000}
          centerMode={false}
          className=''
          containerClass='container'
          dotListClass=''
          draggable
          focusOnSelect={false}
          infinite
          itemClass=''
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={responsive}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={isMobile}
          sliderClass=''
          slidesToSlide={1}
          swipeable
        >
          {arrImg.map((item) => item)}
        </Carousel>
      </Container>
    </StyledSlider>
  );
};

export default Slider;
