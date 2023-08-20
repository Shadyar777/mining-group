import { Box } from '@mui/material';

type GoogleMapsProps = {
  srcGoogle: string;
};

const GoogleMaps = ({ srcGoogle }: GoogleMapsProps) => {
  return (
    <Box
      flex='1 1 350px'
      bgcolor='silver'
      width={{ xs: '100%', md: '400px', lg: '500px' }}
    >
      <iframe
        src={srcGoogle}
        width='100%'
        height='100%'
        style={{ border: '0' }}
        allowFullScreen={false}
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'
      ></iframe>
    </Box>
  );
};

export default GoogleMaps;
