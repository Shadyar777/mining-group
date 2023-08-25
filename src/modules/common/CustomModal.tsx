import { Modal, styled } from '@mui/material';
import { FC } from 'react';
import srcCanselIcon from '@public/svgs/cancel.svg';

type CustomModalProps = {
  open: boolean;
  handleClose: () => void;
  children: JSX.Element | string;
  maxwidth?: string;
};

type StyledModalProps = {
  maxwidth?: string;
};

export const StyledModal = styled(Modal)<StyledModalProps>(
  ({ theme: { shape }, maxwidth }) => ({
    '& .modal__container': {
      position: 'relative',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      // maxWidth: '400px',
      maxWidth: maxwidth ?? '400px',
      width: '100%',
      height: '100%',
      maxHeight: '600px',
      overflow: 'auto',
      // border: '2px solid #000',
      borderRadius: shape.borderRadius,
      padding: '38px 20px 8px',
      background: 'white',
      display: 'flex',
      flexDirection: 'column',

      '& .modal__icon-cancel': {
        position: 'absolute',
        top: '10px',
        right: '20px',
        zIndex: '2',
        cursor: 'pointer',
      },
    },
    '& .modal__content': {
      color: '#000',
    },
  }),
);

const CustomModal: FC<CustomModalProps> = ({
  open,
  handleClose,
  children,
  maxwidth,
}) => {
  return (
    <StyledModal
      maxwidth={maxwidth}
      open={open}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <div className='modal__container'>
        <img
          alt=''
          onClick={handleClose}
          className='modal__icon-cancel'
          src={srcCanselIcon}
        />
        {/*<LanguageSwitcher onClick={onSwitchLanguage} />*/}
        <div className='modal__content'>{children}</div>
      </div>
    </StyledModal>
  );
};

export default CustomModal;
