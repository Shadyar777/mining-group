import { styled } from '@mui/material';
import CardResource from './CardResource.tsx';
import Carousel from 'react-multi-carousel';
import { getArray } from '../../../../../utils/getArray.ts';

export const StyledResources = styled('div')(() => ({
  width: '100%',
  height: '150px',
  padding: '20px 0',

  gridArea: 'Resources',

  '& .react-multi-carousel-item': {
    marginRight: '40px',
  },
}));

const responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024,
    },
    items: 7,
  },
  mobile: {
    breakpoint: {
      max: 464,
      min: 0,
    },
    items: 2,
  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 770,
    },
    items: 4,
  },
  tabletMd: {
    breakpoint: {
      max: 770,
      min: 464,
    },
    items: 3,
  },
};

const Resources = () => {
  return (
    <StyledResources>
      <div className='resources__container'>
        <Carousel
          additionalTransfrom={0}
          arrows={false}
          autoPlay
          autoPlaySpeed={1}
          centerMode={false}
          className=''
          containerClass='container-with-dots'
          customTransition='all 15s linear'
          dotListClass=''
          draggable
          focusOnSelect={false}
          itemClass=''
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          infinite={true}
          responsive={responsive}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderClass=''
          slidesToSlide={2}
          swipeable
          transitionDuration={1000}
        >
          {getArray(10).map((_, key) => (
            <CardResource key={key} />
          ))}
        </Carousel>
      </div>
    </StyledResources>
  );
};

export default Resources;
