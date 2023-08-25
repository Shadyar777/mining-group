import { ChangeEvent, MouseEvent, ReactNode, useRef } from 'react';
import { Button } from '@mui/material';

type UpdateButtonProps = {
  text: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  icon: ReactNode;
  handleFileChange: (e: ChangeEvent<HTMLInputElement>) => void;
};
const UploadImage = ({
  text,
  onClick,
  icon,

  handleFileChange,
}: UpdateButtonProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const handleButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
    inputRef.current?.click();
    onClick?.(e);
  };
  return (
    <Button
      type='button'
      variant='contained'
      onClick={handleButtonClick}
      className='upload-button'
      style={{
        backgroundColor: 'transparent',
        boxShadow: 'none',
        fontSize: '16px',
        fontWeight: '400',
        border: '1px solid #000',
        color: '#2A2A2A',
        borderRadius: '50px',
      }}
      startIcon={icon}
    >
      {text}
      <input
        type='file'
        style={{ display: 'none' }}
        ref={inputRef}
        onChange={handleFileChange}
      />
    </Button>
  );
};

export default UploadImage;
