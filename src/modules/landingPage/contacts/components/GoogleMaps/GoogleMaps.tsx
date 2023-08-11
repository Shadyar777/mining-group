import { Box } from '@mui/material';
import Map from './Map.tsx';

const location = {
  address: 'Almaty, Kazakhstan',
  lat: 43.238949,
  lng: 76.889709,
};

const GoogleMaps = () => {
  return (
    <Box flex='1 1 300px' height='300px' bgcolor='silver'>
      <Map location={location} zoomLevel={17} />
    </Box>
  );
};

export default GoogleMaps;
