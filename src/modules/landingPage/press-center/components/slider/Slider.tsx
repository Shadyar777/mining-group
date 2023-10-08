import Carousel from 'react-multi-carousel';
import { Container, styled, useMediaQuery, useTheme } from '@mui/material';

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

const StyledSlider = styled('div')(({ theme: { breakpoints } }) => ({
  '& .image-box': {
    width: '100%',
    height: '350px',
  },
  [breakpoints.down('sm')]: {},
  [breakpoints.down('mobileSm')]: {
    padding: '32px 0',
  },
}));

type SliderProps = {
  images: string[];
};
const Slider = ({ images }: SliderProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('mobileSm'));

  if (!images) {
    return;
  }
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
          {images?.map((image, idx) => (
            <div className='image-box'>
              <img
                key={idx}
                alt=''
                src={image}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                }}
              />
            </div>
          ))}
        </Carousel>
      </Container>
    </StyledSlider>
  );
};

export default Slider;
