import { HTMLAttributeAnchorTarget, ReactNode } from 'react';
import { Button } from '@mui/material';

type DownloadButtonProps = {
  text: string;
  icon: ReactNode;
  type?: 'button' | 'submit' | 'reset';
  href: string;
  download: boolean;
  target?: HTMLAttributeAnchorTarget | undefined;
};
const DownloadButton = ({
  text,
  icon,
  type,
  href,
  download,
  target,
}: DownloadButtonProps) => {
  return (
    <Button
      type={type}
      variant='contained'
      className='download-button'
      download={download}
      href={href}
      startIcon={icon}
      target={target}
      style={{
        backgroundColor: 'transparent',
        boxShadow: 'none',
        fontSize: '16px',
        fontWeight: '400',
        border: '1px solid #000',
        color: '#2A2A2A',
        borderRadius: '50px',
      }}
    >
      {text}
    </Button>
  );
};

export default DownloadButton;
