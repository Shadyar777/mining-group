import { MouseEvent, ReactNode } from 'react';
import { Button } from '@mui/material';

type UpdateButtonProps = {
  text: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  icon: ReactNode;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
};
const UploadButton = ({
  text,
  onClick,
  icon,
  type,
  disabled = false,
}: UpdateButtonProps) => {
  return (
    <Button
      type={type}
      variant='contained'
      onClick={onClick}
      disabled={disabled}
      className='upload-button'
      style={{
        backgroundColor: 'transparent',
        boxShadow: 'none',
        fontSize: '16px',
        fontWeight: '400',
        border: '1px solid #000',
        color: '#2A2A2A',
        opacity: disabled ? '0.5' : '1',
        borderRadius: '50px',
      }}
      startIcon={icon}
    >
      {text}
    </Button>
  );
};

export default UploadButton;
