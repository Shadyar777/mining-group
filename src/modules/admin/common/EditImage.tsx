import { Dispatch, SetStateAction, useEffect } from 'react';
import { IconButton, styled } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import PlaceholderIcon from '@mui/icons-material/PhotoCamera';
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import useImageUploader from '../../../hooks/useImageUploader.ts';

const StyledEditImage = styled('div')({
  position: 'relative',

  '& img': {
    // ... возможные дополнительные стили для изображения
  },

  '& .action-icons': {
    position: 'absolute',
    top: '15px',
    right: '15px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    backgroundColor: '#FFF',
    borderRadius: '50px',
    padding: '12px 16px',

    // color: '#505050'
  },

  '& label': {
    cursor: 'pointer',
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  '& .hidden-input': {
    display: 'none',
  },
  '& .edit__delete, .edit__edit-image': {
    color: '#505050',
  },
  '& .edit__icon-button-delete': {
    padding: '0',
  },

  '& .placeholder-icon': {
    fontSize: 100,
    color: '#ccc',
  },
});

type EditImageProps = {
  urlImag: string | null;
  setUploadedImage: Dispatch<SetStateAction<string | ArrayBuffer | null>>;
};

const EditImage = ({ urlImag, setUploadedImage }: EditImageProps) => {
  const {
    uploadedImage,
    handleImageUpload,
    handleImageRemove,
    setUploadedImage: setImageWithBase64,
  } = useImageUploader({
    initialImage: urlImag,
    textMessage: 'Неправильный формат изображения!',
  });

  useEffect(() => {
    if (urlImag) {
      setUploadedImage(null);
      setUploadedImage(urlImag);
    }
  }, [urlImag, setUploadedImage]);

  useEffect(() => {
    setUploadedImage(uploadedImage);
  }, [uploadedImage, setUploadedImage]);

  useEffect(() => {
    setImageWithBase64(urlImag);
  }, [setImageWithBase64, urlImag]);

  return (
    <StyledEditImage className='edit__img'>
      {uploadedImage ? (
        <>
          <img alt='' src={uploadedImage as string} />
          <div className='action-icons'>
            <label>
              <input
                type='file'
                accept='image/*'
                onChange={handleImageUpload}
                className='hidden-input'
              />
              <AddPhotoAlternateOutlinedIcon className='edit__edit-image' />
            </label>
            <IconButton
              className='edit__icon-button-delete'
              onClick={handleImageRemove}
            >
              <DeleteIcon className='edit__delete' />
            </IconButton>
          </div>
        </>
      ) : (
        <label>
          <input
            type='file'
            accept='image/*'
            onChange={handleImageUpload}
            className='hidden-input'
          />
          <PlaceholderIcon className='placeholder-icon' />
        </label>
      )}
    </StyledEditImage>
  );
};

export default EditImage;
