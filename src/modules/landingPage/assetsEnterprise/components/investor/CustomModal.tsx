import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Button, Typography } from '@mui/material';
import PinCode from './PinCode.tsx';
import { useAppDispatch } from '../../../../../store/hooks.ts';
import { addPassword } from '../../../../admin/signIn/slice.ts';
import { useEffect, useState } from 'react';
import { useLazyGetFieldsPrivateByIdQuery } from '../../../../../rtk-query';
import { useNavigate } from 'react-router-dom';

type CustomModalProps = {
  open: boolean;
  onClose: (event: any, reason: 'backdropClick' | 'escapeKeyDown') => void;
  id: number;
};

export default function CustomModal({ id, open, onClose }: CustomModalProps) {
  const navigate = useNavigate();

  const [pinCode, setPinCode] = useState<string>('');
  const dispatch = useAppDispatch();
  const [getFieldsById, { isSuccess, isError }] =
    useLazyGetFieldsPrivateByIdQuery();
  const sendPinCode = () => {
    if (Number(pinCode.length) === 6) {
      dispatch(
        addPassword({
          password: pinCode,
          id: id,
        }),
      );
      getFieldsById({ id });
    }
  };

  useEffect(() => {
    if (isSuccess) {
      navigate('/press-center', { replace: false });
    }
  }, [isSuccess, navigate]);

  return (
    <Dialog
      open={open}
      onClose={(event, reason) => {
        if (reason !== 'backdropClick') {
          onClose(event, reason);
        }
      }}
      PaperProps={{
        style: {
          position: 'relative',
          borderRadius: 20,
          background: '#004B8F',
          color: '#FFF',
          textAlign: 'center',
          fontFamily: 'inherit',
          fontSize: 32,
          fontStyle: 'normal',
          fontWeight: 400,
          lineHeight: 'normal',
          width: 660,
          height: 350,
        },
      }}
    >
      <IconButton
        style={{
          position: 'absolute',
          right: 10,
          top: 10,
          color: '#FFF',
        }}
        onClick={onClose as any}
      >
        <CloseIcon />
      </IconButton>

      <DialogContent>
        <Typography variant='h4'>Для открытия файла введите пин-код</Typography>
        <Typography variant='body1'>
          Закрытая информация. Для предоставление доступа обратитесь к менеджеру
        </Typography>
        <div>
          <PinCode setPinCode={setPinCode} />
        </div>
        <Button
          style={{ color: 'white' }}
          disabled={Number(pinCode.length) !== 6}
          onClick={sendPinCode}
        >
          Отправить
        </Button>

        {isError && (
          <Typography variant='body1'>
            Неверный пин-код. Отправить повторно
          </Typography>
        )}
      </DialogContent>
    </Dialog>
  );
}
