import { Container, styled, Typography } from '@mui/material';
import Card from './Card.tsx';
import Carousel from 'react-multi-carousel';

const responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024,
    },
    items: 3,
    // partialVisibilityGutter: 40
  },
  mobile: {
    breakpoint: {
      max: 464,
      min: 0,
    },
    items: 2,
    partialVisibilityGutter: 30,
  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 464,
    },
    items: 3,
    partialVisibilityGutter: 30,
  },
};

export const StyledFindOutMore = styled('div')(() => ({
  width: '100%',
  padding: '20px 0',

  '& .react-multi-carousel-item': {
    marginRight: '5px',

    '& div:last-child': {
      paddingRight: '10px',
    },
  },
}));
const arr = Array.from({ length: 3 }, (_, index) => index + 1);
const FindOutMore = () => {
  return (
    <StyledFindOutMore>
      <Container maxWidth='md'>
        <div className='find-out-more__content'>
          <Typography variant='h3' className='content__title'>
            Узнать больше
          </Typography>
          <Carousel
            additionalTransfrom={0}
            arrows
            autoPlaySpeed={3000}
            centerMode={false}
            containerClass='container'
            dotListClass=''
            draggable
            focusOnSelect={false}
            infinite={false}
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
            showDots={false}
            sliderClass=''
            slidesToSlide={1}
            swipeable
          >
            {arr.map(() => (
              <Card />
            ))}
          </Carousel>
        </div>
      </Container>
    </StyledFindOutMore>
  );
};

export default FindOutMore;
