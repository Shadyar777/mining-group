import GoogleMapReact from 'google-map-react';
import locationIcon from '@iconify/icons-mdi/map-marker';
import { Icon } from '@iconify/react';
import { styled } from '@mui/material';

export const StyledHMap = styled('div')(({ theme: { breakpoints } }) => ({
  '& .map-h2': {
    textTransform: 'uppercase',
    fontSize: '1rem',
    padding: '20px',
    paddingLeft: '10px',
    textAlign: 'center',
  },
  '& .google-map': {
    width: '100%',
    height: '100%',
    // height: '60vh',
  },
  '& .pin': {
    display: 'flex',
    alignItems: 'center',
    width: '180px',
    color: 'blue',
  },

  '& .pin-icon': {
    fontSize: '4rem',
  },
  '& .pin-text': {
    fontSize: '1.3em',
  },

  '@media screen and (min-width: 799px)': {
    '.google-map': { height: '300px', maxHeight: '100%' },
    '.map-h2': { fontSize: '1.3rem', fontWeight: 400 },
    '.pin': { width: '15vw' },
    '.pin-icon': { fontSize: '10vw' },
  },

  [breakpoints.down('sm')]: {},
  [breakpoints.down('mobileSm')]: {
    // marginTop: '60px',
  },
}));

const mapOptions = {
  panControl: false,
  mapTypeControl: false,
  scrollwheel: false,
  styles: [
    {
      stylers: [
        { saturation: -100 },
        { gamma: 0.8 },
        { lightness: 4 },
        { visibility: 'on' },
      ],
    },
  ],
};

const LocationPin = ({ text }) => (
  <div className='pin'>
    <Icon icon={locationIcon} className='pin-icon' />
    <p className='pin-text'>{text}</p>
  </div>
);

// FIXME: нудно будет исправить карту
const Map = ({ location, zoomLevel }) => {
  return (
    <StyledHMap className='map'>
      <div className='google-map'>
        <GoogleMapReact
          options={mapOptions}
          bootstrapURLKeys={{
            key: 'AIzaSyDxVuuEAM8un7dW0fFA-sedsX-H_MwP8_U',
            language: 'ru',
            region: 'ru',
            libraries: ['places'],
          }}
          defaultCenter={location}
          defaultZoom={zoomLevel}
        >
          <LocationPin text={location.address} />
        </GoogleMapReact>
      </div>
    </StyledHMap>
  );
};

export default Map;
