import Carousel from 'react-multi-carousel';
import Card from './Card.tsx';
import { styled } from '@mui/material';
import { ValuesResponse } from '../../../../../rtk-query';
import { parseImgBase64 } from '../../../../../utils';

export const StyledActivityMobileCarousel = styled(Carousel)(() => ({
  '& .card': {
    padding: '16px',
  },
  '& .react-multi-carousel-item ': {
    marginRight: '10px',
  },
}));

const responsive = {
  mobileSm: {
    breakpoint: {
      max: 420,
      min: 0,
    },
    items: 1,
    partialVisibilityGutter: 70,
  },
  mobileLg: {
    breakpoint: {
      max: 600,
      min: 420,
    },
    items: 1,
    partialVisibilityGutter: 120,
  },
};

const OurValuesMobileCarousel = ({
  data,
}: {
  data: ValuesResponse['data'];
}) => {
  return (
    <StyledActivityMobileCarousel
      additionalTransfrom={0}
      arrows={false}
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
      partialVisible
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
      {data.map(({ text, id, title, file }) => {
        const parsedIconBase64 = data
          ? parseImgBase64({
              data: file.data || '',
              type: file.type || '',
            })
          : null;

        return (
          <Card
            title={title}
            text={text}
            icon={parsedIconBase64}
            id={id}
            key={id}
          />
        );
      })}
    </StyledActivityMobileCarousel>
  );
};

export default OurValuesMobileCarousel;
