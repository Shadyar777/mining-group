import { Dispatch, SetStateAction, useEffect } from 'react';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';

import DeleteIcon from '@mui/icons-material/Delete';
import TitleEdit from '../../../common/TitleEdit.tsx';
import useImageUploader from '../../../../../hooks/useImageUploader.ts';

// const allowedFormats = ['image/png', 'image/jpeg'];

type EditIconProps = {
  initialImage: string | null;
  setUploadedImage: Dispatch<SetStateAction<string | ArrayBuffer | null>>;
};

const EditIcon = ({ initialImage, setUploadedImage }: EditIconProps) => {
  const { uploadedImage, handleImageUpload, handleImageRemove } =
    useImageUploader({
      initialImage,
      textMessage: 'Пожалуйста, загрузите только SVG файл!',
    });

  useEffect(() => {
    if (initialImage) {
      setUploadedImage(initialImage);
    }
  }, [initialImage, setUploadedImage]);

  useEffect(() => {
    setUploadedImage(uploadedImage);
  }, [uploadedImage, setUploadedImage]);

  return (
    <>
      <TitleEdit>Изображение:</TitleEdit>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        {uploadedImage ? (
          <img
            src={uploadedImage as string}
            alt='Uploaded preview'
            style={{ width: '50px', height: '50px', objectFit: 'cover' }}
          />
        ) : (
          <Box
            padding='8.5px'
            bgcolor='#D9D9D9'
            borderRadius='20px'
            display='flex'
            justifyContent='center'
            alignItems='center'
          >
            <AddPhotoAlternateOutlinedIcon
              style={{ fontSize: 50, color: '#505050' }}
            />
          </Box>
        )}
        <input
          type='file'
          // accept='image/*'
          accept='image/svg+xml'
          onChange={handleImageUpload}
          style={{ display: 'none' }}
          id='upload-input'
        />
        <Box
          className='edit__download-items'
          display='flex'
          flexDirection='column'
        >
          <label htmlFor='upload-input'>
            <IconButton component='span'>
              {/*<UploadIcon />*/}
              <AddPhotoAlternateOutlinedIcon />
            </IconButton>
          </label>
          <IconButton onClick={handleImageRemove}>
            <DeleteIcon />
          </IconButton>
        </Box>
      </div>
    </>
  );
};

export default EditIcon;
