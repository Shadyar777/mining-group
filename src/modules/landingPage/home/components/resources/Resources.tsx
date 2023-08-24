// import { styled } from '@mui/material';
// import CardResource from './CardResource.tsx';
// import Carousel from 'react-multi-carousel';
// import { getArray } from '../../../../../utils/getArray.ts';
//
// export const StyledResources = styled('div')(() => ({
//   width: '100%',
//   height: '150px',
//   padding: '20px 0',
//
//   gridArea: 'Resources',
//
//   '& .react-multi-carousel-item': {
//     marginRight: '40px',
//   },
// }));
//
// const responsive = {
//   desktop: {
//     breakpoint: {
//       max: 3000,
//       min: 1024,
//     },
//     items: 7,
//   },
//   mobile: {
//     breakpoint: {
//       max: 464,
//       min: 0,
//     },
//     items: 2,
//   },
//   tablet: {
//     breakpoint: {
//       max: 1024,
//       min: 770,
//     },
//     items: 4,
//   },
//   tabletMd: {
//     breakpoint: {
//       max: 770,
//       min: 464,
//     },
//     items: 3,
//   },
// };
//
// const Resources = () => {
//   return (
//     <StyledResources>
//       <div className='resources__container'>
//         <Carousel
//           additionalTransfrom={0}
//           arrows={false}
//           autoPlay
//           autoPlaySpeed={1}
//           centerMode={false}
//           className=''
//           containerClass='container-with-dots'
//           customTransition='all 15s linear'
//           dotListClass=''
//           draggable
//           focusOnSelect={false}
//           itemClass=''
//           keyBoardControl
//           minimumTouchDrag={80}
//           pauseOnHover
//           renderArrowsWhenDisabled={false}
//           renderButtonGroupOutside={false}
//           renderDotsOutside={false}
//           infinite={true}
//           responsive={responsive}
//           rewind={false}
//           rewindWithAnimation={false}
//           rtl={false}
//           shouldResetAutoplay
//           showDots={false}
//           sliderClass=''
//           slidesToSlide={2}
//           swipeable
//           transitionDuration={1000}
//         >
//           {getArray(10).map((_, key) => (
//             <CardResource key={key} />
//           ))}
//         </Carousel>
//       </div>
//     </StyledResources>
//   );
// };
//

import { useEffect } from 'react';
import { styled } from '@mui/material';

export const StyledResources = styled('div')(() => ({
  width: '100%',
  height: '150px',
  padding: '20px 0',

  gridArea: 'Resources',

  '& .react-multi-carousel-item': {
    marginRight: '40px',
  },
}));

const TradingViewWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.id = 'tradingViewWidgetScript';
    script.src =
      'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbols: [
        {
          description: '',
          proName: 'FX_IDC:USDKZT',
        },
        {
          description: '',
          proName: 'FX_IDC:EURKZT',
        },
        {
          description: '',
          proName: 'FX_IDC:GBPKZT',
        },
        {
          description: '',
          proName: 'FX_IDC:CNYKZT',
        },
        {
          description: '',
          proName: 'TVC:GOLD',
        },
        {
          description: '',
          proName: 'TVC:SILVER',
        },
        {
          description: '',
          proName: 'NCDEX:COPPER',
        },
        {
          description: '',
          proName: 'COMEX:COB1!',
        },
        {
          description: '',
          proName: 'SPARKS:LITHIUM',
        },
        {
          description: '',
          proName: 'TVC:UKOIL',
        },
        {
          description: '',
          proName: 'FWB:GPT',
        },
      ],
      showSymbolLogo: true,
      colorTheme: 'dark',
      isTransparent: false,
      displayMode: 'adaptive',
      locale: 'ru',
    });

    const container = document.querySelector(
      '.tradingview-widget-container__widget',
    );
    if (container) {
      container.appendChild(script);
    }

    return () => {
      const existingScript = document.getElementById('tradingViewWidgetScript');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <StyledResources>
      <div className='tradingview-widget-container'>
        <div className='tradingview-widget-container__widget'></div>
        <div className='tradingview-widget-copyright'>
          <a
            href='https://ru.tradingview.com/'
            rel='noopener nofollow'
            target='_blank'
          >
            <span className='blue-text'>Следите за рынками на TradingView</span>
          </a>
        </div>
      </div>
    </StyledResources>
  );
};

export default TradingViewWidget;
