import { IconButton, styled } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import PlaceholderIcon from '@mui/icons-material/PhotoCamera';
import useImageUploader from '../../../../../hooks/useImageUploader.ts';
import { Dispatch, SetStateAction, useEffect } from 'react';

const StyledEditImage = styled('div')({
  position: 'relative',

  '& img': {
    // здесь могут быть дополнительные стили для изображения, если они понадобятся в будущем
  },

  '& .delete-button': {
    position: 'absolute',
    top: '5px',
    right: '5px',
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
  const { uploadedImage, handleImageUpload, handleImageRemove } =
    useImageUploader({
      initialImage: urlImag,
      textMessage: 'Неправильный формат изображения!',
    });

  useEffect(() => {
    if (urlImag) {
      setUploadedImage(urlImag);
    }
  }, [urlImag, setUploadedImage]);

  useEffect(() => {
    setUploadedImage(uploadedImage);
  }, [uploadedImage, setUploadedImage]);
  return (
    <StyledEditImage className='edit__img'>
      {uploadedImage ? (
        <>
          <img alt='' src={uploadedImage as string} />
          <IconButton className='delete-button' onClick={handleImageRemove}>
            <DeleteIcon />
          </IconButton>
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
