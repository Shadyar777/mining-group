import { Box } from '@mui/material';

// const location = {
//   address: 'Almaty, Kazakhstan',
//   lat: 43.238949,
//   lng: 76.889709,
// };

type GoogleMapsProps = {
  srcGoogle: string;
};

const GoogleMaps = ({ srcGoogle }: GoogleMapsProps) => {
  // useEffect(() => {
  //   // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //   // @ts-ignore
  //   const map = new window.google.maps.Map(document.getElementById('map'), {
  //     zoom: 15,
  //     center: { lat: lat, lng: lng },
  //   });
  //   // eslint-disable-next-line @typescript-eslint/no-unused-vars
  //   const marker = new window.google.maps.Marker({
  //     position: { lat: lat, lng: lng },
  //     map: map,
  //     title: 'Мы здесь!',
  //   });
  //   console.log(marker);
  // }, [lat, lng]);
  return (
    <Box
      flex='1 1 350px'
      bgcolor='silver'
      width={{ xs: '100%', md: '400px', lg: '500px' }}
    >
      {/*<div id='map' style={{ width: '100%', height: '100%' }}></div>*/}
      <iframe
        src={srcGoogle}
        // width='500'
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

// https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23208.126654968102!2d78.31919585176364!3d44.97291343567291!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x427f023de9586dc3%3A0x9ca609a109d812c9!2sHelios!5e0!3m2!1sru!2skz!4v1692559901990!5m2!1sru!2skz
