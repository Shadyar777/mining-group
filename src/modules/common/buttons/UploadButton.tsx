import { MouseEvent, ReactNode } from 'react';
import { Button, styled } from '@mui/material';

type StyledUploadButtonProps = {
  disabled?: boolean;
};
export const StyledUploadButton = styled(Button)<StyledUploadButtonProps>(
  ({ theme: { breakpoints }, disabled }) => ({
    fontSize: '16px',
    opacity: disabled ? '0.5' : '1',

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
    <StyledUploadButton
      type={type}
      variant='contained'
      onClick={onClick}
      disabled={disabled}
      className='upload-button'
      startIcon={icon}
      style={{ ...inlineStyles }}
    >
      {text}
    </StyledUploadButton>
  );
};

export default UploadButton;
