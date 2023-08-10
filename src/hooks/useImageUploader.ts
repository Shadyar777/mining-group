import { ChangeEvent, useState } from 'react';

type ImageUploaderReturnType = {
  uploadedImage: string | ArrayBuffer | null;
  handleImageUpload: (e: ChangeEvent<EventTarget & HTMLInputElement>) => void;
  handleImageRemove: () => void;
};

type UseImageUploaderPorps = {
  initialImage: string | null;
  textMessage: string;
};
const useImageUploader = ({
  initialImage,
  textMessage,
}: UseImageUploaderPorps): ImageUploaderReturnType => {
  const [uploadedImage, setUploadedImage] = useState<
    string | ArrayBuffer | null
  >(initialImage);

  const handleImageUpload = (
    e: ChangeEvent<EventTarget & HTMLInputElement>,
  ) => {
    if (!e.target.files) {
      return;
    }
    const file = e.target.files[0];
    if (file.type !== 'image/svg+xml') {
      alert(textMessage);
      return;
    }
    const reader = new FileReader();

    reader.onloadend = () => {
      setUploadedImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleImageRemove = () => {
    setUploadedImage(null);
  };

  return {
    uploadedImage,
    handleImageUpload,
    handleImageRemove,
  };
};

export default useImageUploader;
