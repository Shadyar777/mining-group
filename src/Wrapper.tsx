import { FC, ReactElement, useEffect } from 'react';
import { enqueueSnackbar } from 'notistack';
import { useAppDispatch, useAppSelector } from './store/hooks.ts';
import {
  Admin,
  getNotifications,
  resetEnqueueSnackbar,
} from './modules/common/sliceCommon/slice.ts';

const showNotifications = (notifications: Admin['notifications']) => {
  if (!notifications) {
    return;
  }
  enqueueSnackbar(notifications.message, {
    variant: notifications.options.variant ?? 'default',
  });
};

const Wrapper: FC<{
  children: ReactElement;
}> = ({ children }) => {
  const dispatch = useAppDispatch();
  const notifications = useAppSelector(getNotifications);
  useEffect(() => {
    showNotifications(notifications);
    dispatch(resetEnqueueSnackbar());
  }, [dispatch, notifications]);

  return <>{children}</>;
};

export default Wrapper;
