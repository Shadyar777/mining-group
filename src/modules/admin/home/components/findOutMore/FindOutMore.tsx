import { Container, styled, Typography } from '@mui/material';
import Card from './Card.tsx';
import Carousel from 'react-multi-carousel';
import { useGetTitleQuery } from '../../../../../rtk-query';
import { useAppSelector } from '../../../../../store/hooks.ts';
import { getAddGlobalLanguages } from '../../../../common/sliceCommon/slice.ts';

const responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024,
    },
    items: 3,
    // partialVisibilityGutter: 40
  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 464,
    },
    items: 3,
  },
  mobile: {
    breakpoint: {
      max: 464,
      min: 0,
    },
    items: 1,
    partialVisibilityGutter: 100,
  },
};

export const StyledFindOutMore = styled('div')(
  ({ theme: { breakpoints } }) => ({
    width: '100%',
    padding: '20px 0',
    gridArea: 'FindOutMore',

    '& .react-multi-carousel-item': {
      marginRight: '5px',

      '& div:last-child': {
        paddingRight: '10px',
      },
    },
    [breakpoints.down('mobileSm')]: {
      '& .find-out-more__content': {},
      '& .content__title': {
        fontSize: '24px',
        textAlign: 'center',
      },
    },
  }),
);

const FindOutMore = () => {
  const lng = useAppSelector(getAddGlobalLanguages);
  const { data } = useGetTitleQuery(lng);

  console.log('data', data);
  return (
    <StyledFindOutMore>
      {data && (
        <Container maxWidth='md'>
          <div className='find-out-more__content'>
            <Typography variant='h3' className='content__title'>
              Узнать больше
            </Typography>
            <Carousel
              additionalTransfrom={0}
              arrows={false}
              autoPlaySpeed={3000}
              centerMode={false}
              className=''
              containerClass='container'
              dotListClass=''
              draggable
              focusOnSelect={false}
              // infinite
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
              {data.data.map((title) => (
                <Card {...title} key={title.id} />
              ))}
            </Carousel>
          </div>
        </Container>
      )}
    </StyledFindOutMore>
  );
};

export default FindOutMore;
