import { FC, useState } from 'react';
import { Grid } from '@mui/material';
import { ImageCard } from './ImageCard.tsx';

export interface Image {
  src?: string;
  file?: File;
}

interface ImageGalleryProps {
  initialImages?: Image[];
  onChange?: (images: Image[]) => void;
}

const ImageGallery: FC<ImageGalleryProps> = ({
  initialImages = [],
  onChange,
}) => {
  const [images, setImages] = useState<Image[]>(
    initialImages.concat(Array(6 - initialImages.length).fill({})),
  );

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
        <Grid item xs={4} key={index} margin={0}>
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
