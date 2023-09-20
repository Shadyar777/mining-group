import { FC, useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import { ImageCard } from './ImageCard.tsx';

export interface Image {
  src?: string;
  file?: File;
}

interface ImageGalleryProps {
  initialImages?: Image[];
  onChange?: (images: Image[]) => void;
  isEdit?: boolean;
}

const ImageGallery: FC<ImageGalleryProps> = ({
  initialImages = [],
  onChange,
  isEdit = false,
}) => {
  const emptyArrObj = initialImages.concat(Array(6).fill({}));
  const [images, setImages] = useState<Image[]>(isEdit ? [] : emptyArrObj);

  useEffect(() => {
    if (initialImages.length) {
      setImages(initialImages.concat(Array(6 - initialImages.length).fill({})));
    }
  }, [initialImages]);

  const handleImageChange = (index: number, file: File) => {
    const updatedImages = [...images];
    const reader = new FileReader();
    reader.onloadend = () => {
      updatedImages[index] = { file, src: reader.result as string };
      setImages(updatedImages);
      onChange?.(updatedImages);
    };
    reader.readAsDataURL(file);
  };

  const handleImageRemove = (index: number) => {
    const updatedImages = [...images];
    updatedImages[index] = {};
    setImages(updatedImages);
    onChange?.(updatedImages);
  };

  return (
    <Grid container spacing={2}>
      {images.map((image, index) => (
        <Grid item xs={4} key={`${image || ''}-${index}`} margin={0}>
          <ImageCard
            initialImageSrc={image.src}
            onImageChange={(file) => handleImageChange(index, file)}
            onImageRemove={() => handleImageRemove(index)}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default ImageGallery;
