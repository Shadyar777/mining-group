import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Button, CircularProgress, Typography } from '@mui/material';
import PinCode from './PinCode.tsx';
import { useAppDispatch, useAppSelector } from '../../../../../store/hooks.ts';
import { addPassword } from '../../../../admin/signIn/slice.ts';
import { useEffect, useState } from 'react';
import { useLazyGetFieldsPrivateByIdQuery } from '../../../../../rtk-query';
import { useNavigate } from 'react-router-dom';
import { getAddGlobalLanguages } from '../../../../common/sliceCommon/slice.ts';
import { useTranslation } from 'react-i18next';

type CustomModalProps = {
  open: boolean;
  onClose: (event: any, reason: 'backdropClick' | 'escapeKeyDown') => void;
  id: number;
};

export default function CustomModal({ id, open, onClose }: CustomModalProps) {
  const { t } = useTranslation('translation');

  const navigate = useNavigate();
  const lng = useAppSelector(getAddGlobalLanguages);
  const [pinCode, setPinCode] = useState<string>('');
  const dispatch = useAppDispatch();
  const [getFieldsById, { isSuccess, isError, isLoading }] =
    useLazyGetFieldsPrivateByIdQuery();
  const sendPinCode = () => {
    if (Number(pinCode.length) === 6) {
      dispatch(
        addPassword({
          password: pinCode,
          id: id,
        }),
      );
      getFieldsById({ id, password: pinCode, lng });
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
        <Typography variant='h4'>
          {t('assetsEnterprise.openFilePINCode')}
        </Typography>
        <Typography variant='body1'>
          {t('assetsEnterprise.closeInformation')}
        </Typography>
        <div>
          <PinCode setPinCode={setPinCode} />
        </div>
        <Button
          style={{ color: 'white' }}
          disabled={Number(pinCode.length) !== 6}
          onClick={sendPinCode}
        >
          {isLoading ? <CircularProgress size={24} /> : t('common.send')}
        </Button>

        {isError && (
          <Typography variant='body1'>
            {t('assetsEnterprise.invalidPINCode')}
          </Typography>
        )}
      </DialogContent>
    </Dialog>
  );
}
