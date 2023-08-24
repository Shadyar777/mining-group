import { ChangeEvent, useEffect, useState } from 'react';
import { styled } from '@mui/material';
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import Box from '@mui/material/Box';
import DeleteIcon from '@mui/icons-material/Delete';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import {
  useGetBackgroundQuery,
  useUpdateHomeBackgroundMutation,
} from '../../../../../rtk-query';
import {
  base64ToFile,
  createFormData,
  fileToBase64,
  parseImgBase64,
} from '../../../../../utils';

import UploadImage from '../../../../common/buttons/UploadImage.tsx';
import UploadButton from '../../../../common/buttons/UploadButton.tsx';

type StyledTopBannerProps = {
  bgImg?: string | null;
};
export const StyledTopBanner = styled('div')<StyledTopBannerProps>(
  ({ theme: { breakpoints }, bgImg }) => ({
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
      backgroundImage: bgImg ? `url(${bgImg})` : 'none',
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
  }),
);

const TopBanner = () => {
  const [bgImg, setBgImg] = useState<null | string>('');
  const [backgroundImageUrl, setBackgroundImageUrl] = useState<string | null>(
    null,
  );
  const [imgForReport, setImgForReport] = useState<string | null>(null);

  const [updateBgImage] = useUpdateHomeBackgroundMutation();

  const { data } = useGetBackgroundQuery('ru');
  const onUploadImage = async () => {
    const data = {
      file: imgForReport
        ? await base64ToFile({
            dataURI: imgForReport as string,
            fileName: 'bg-image',
            optionsType: 'image/jpeg',
          })
        : null,
    };
    const FormData = createFormData(data);
    await updateBgImage(FormData);

    if (backgroundImageUrl) {
      URL.revokeObjectURL(backgroundImageUrl);
      setBackgroundImageUrl(null);
    }
  };

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      const base64String = await fileToBase64(file);
      if (base64String) {
        setImgForReport(base64String);
        const url = URL.createObjectURL(file);
        setBackgroundImageUrl(url);
      }
    }
  };

  const onDeleteImage = () => {
    if (backgroundImageUrl) {
      URL.revokeObjectURL(backgroundImageUrl);
      setBackgroundImageUrl(null);
    }
  };

  useEffect(() => {
    const parsedIconBase64 = data?.data
      ? parseImgBase64({
          data: data.data.mainFile.data || '',
          type: data.data.mainFile.type || '',
        })
      : null;
    setBgImg(parsedIconBase64);
  }, [data?.data]);

  useEffect(() => {
    return () => {
      if (backgroundImageUrl) {
        URL.revokeObjectURL(backgroundImageUrl);
      }
    };
  }, [backgroundImageUrl]);

  return (
    <StyledTopBanner bgImg={backgroundImageUrl || bgImg}>
      <div className='top-banner-container' />
      {backgroundImageUrl ? (
        <>
          <Box display='flex' gap='0 10px'>
            <UploadButton
              text='Удалить'
              onClick={onDeleteImage}
              icon={<DeleteIcon />}
            />
            <UploadButton
              text='Загрузить'
              onClick={onUploadImage}
              icon={<CloudUploadIcon />}
            />
          </Box>
        </>
      ) : (
        <UploadImage
          text='Загрузить картинку'
          icon={<AddPhotoAlternateOutlinedIcon />}
          handleFileChange={handleFileChange}
        />
      )}
    </StyledTopBanner>
  );
};

export default TopBanner;
