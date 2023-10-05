import { ChangeEvent, MouseEvent, ReactNode, useRef } from 'react';
import { Button, styled } from '@mui/material';

export const StyledUploadImage = styled(Button)(
  ({ theme: { breakpoints } }) => ({
    fontSize: '16px',

    [breakpoints.down('mobileSm')]: {
      fontSize: '12px',
    },
  }),
);

const inlineStyles = {
  backgroundColor: 'transparent',
  boxShadow: 'none',
  fontWeight: '400',
  border: '1px solid #000',
  color: '#2A2A2A',
  borderRadius: '50px',
};

type UpdateButtonProps = {
  text: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  icon: ReactNode;
  handleFileChange: (e: ChangeEvent<HTMLInputElement>) => void;
  accept?: string;
};
const UploadImage = ({
  text,
  onClick,
  icon,
  handleFileChange,
  accept,
}: UpdateButtonProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const handleButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
    inputRef.current?.click();
    onClick?.(e);
  };
  return (
    <StyledUploadImage
      type='button'
      variant='contained'
      onClick={handleButtonClick}
      className='upload-button'
      startIcon={icon}
      style={inlineStyles}
    >
      {text}
      <input
        type='file'
        style={{ display: 'none' }}
        ref={inputRef}
        onChange={handleFileChange}
        accept={accept}
      />
    </StyledUploadImage>
  );
};

export default UploadImage;
