import React, { useState } from 'react';
import { IconButton, Box, styled } from '@mui/material';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

interface ImageCardProps {
  initialImageSrc?: string;
  onImageChange?: (file: File) => void;
  onImageRemove?: () => void;
}

const StyledCard = styled(Box)(() => ({
  display: 'flex',
  width: '100px',
  height: '100px',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '10px',
  borderRadius: '20px',
  background: '#D9D9D9',
  position: 'relative',

  '& .edit__label': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    fontSize: '50px',
    color: '#505050',
  },
}));

const StyledRemoveButton = styled(IconButton)(() => ({
  position: 'absolute',
  top: 3,
  right: 3,
}));

export const ImageCard: React.FC<ImageCardProps> = ({
  initialImageSrc,
  onImageChange,
  onImageRemove,
}) => {
  const [imageSrc, setImageSrc] = useState<string | null>(
    initialImageSrc || null,
  );

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result as string);
        onImageChange?.(file);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageRemove = () => {
    setImageSrc(null);
    onImageRemove?.();
  };

  return (
    <StyledCard>
      {imageSrc ? (
        <Box flex='auto' overflow='hidden'>
          <img
            src={imageSrc}
            alt='Uploaded Preview'
            style={{ width: '100%', height: '100%', borderRadius: '10px', maxHeight: '100%' }}
            // style={{ maxWidth: '100%', borderRadius: '10px' }}
          />
        </Box>
      ) : (
        <label className='edit__label'>
          <input
            type='file'
            style={{ display: 'none' }}
            onChange={handleImageUpload}
            accept='image/*'
          />
          <AddPhotoAlternateIcon
            fontSize='inherit'
            style={{ cursor: 'pointer' }}
          />
        </label>
      )}
      <StyledRemoveButton size='small' onClick={handleImageRemove}>
        <HighlightOffIcon />
      </StyledRemoveButton>
    </StyledCard>
  );
};
