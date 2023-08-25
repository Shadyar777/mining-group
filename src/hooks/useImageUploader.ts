import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from 'react';

type ImageUploaderReturnType = {
  uploadedImage: string | ArrayBuffer | null;
  handleImageUpload: (e: ChangeEvent<EventTarget & HTMLInputElement>) => void;
  handleImageRemove: () => void;
  setUploadedImage: Dispatch<SetStateAction<string | ArrayBuffer | null>>;
};

type AllowedFormat = 'png' | 'jpeg' | 'svg+xml' | 'svg';

type UseImageUploaderProps = {
  initialImage: string | null;
  textMessage: string;
  allowedFormat?: AllowedFormat;
};
const useImageUploader = ({
  initialImage,
  textMessage,
  allowedFormat,
}: UseImageUploaderProps): ImageUploaderReturnType => {
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
    if (file.type === `image/${allowedFormat ?? '*'}`) {
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

  useEffect(() => {
    setUploadedImage(initialImage);
  }, [initialImage]);

  return {
    uploadedImage,
    handleImageUpload,
    handleImageRemove,
    setUploadedImage,
  };
};

export default useImageUploader;
