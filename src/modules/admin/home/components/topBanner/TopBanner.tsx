import { styled } from '@mui/material';
import UploadButton from '../../../../common/buttons/UploadButton.tsx';
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';

export const StyledTopBanner = styled('div')(({ theme: { breakpoints } }) => ({
  width: '100%',
  height: '700px',
  position: 'relative',
  marginTop: '-160px',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  '& .upload-button': {
    marginTop: '48px',
  },

  gridArea: 'TopBanner',

  '.top-banner-container': {
    width: '100%',
    height: '100%',
    background: `url('./../../../../../public/images/home-top-banner.jpg')`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',

  },

  [breakpoints.down('mobileSm')]: {
    display: 'none',
    height: '100px',
    '& .top-banner-container': {
      background: 'unset',
    },
  },
}));

const TopBanner = () => {
  const onUploadImage = (e: any) => {
    console.log(e);
  };
  return (
    <StyledTopBanner>
      <div className='top-banner-container' />
      <UploadButton
        text='Загрузить файл'
        onClick={onUploadImage}
        icon={<AddPhotoAlternateOutlinedIcon />}
      />
    </StyledTopBanner>
  );
};

export default TopBanner;
