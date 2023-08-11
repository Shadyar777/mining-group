import { MouseEvent } from 'react';
import { Button } from '@mui/material';

type LanguageButtonProps = {
  text: string;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  icon: string;
};
const LanguageButton = ({ text, onClick, icon }: LanguageButtonProps) => {
  return (
    <Button
      variant='contained'
      onClick={onClick}
      className='upload-button'
      style={{
        backgroundColor: 'transparent',
        fontSize: '16px',
        fontWeight: '400',
        boxShadow: 'none',
        color: '#2A2A2A',
        borderRadius: '50px',
        border: '1px solid #000',
        width: '100%',
      }}
      startIcon={icon}
    >
      {text}
    </Button>
  );
};

export default LanguageButton;
