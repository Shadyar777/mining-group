import { FC, ReactElement, useEffect } from 'react';
import { enqueueSnackbar } from 'notistack';
import { useAppSelector } from './store/hooks.ts';
import { Admin, getNotifications } from './modules/common/sliceCommon/slice.ts';

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
  const notifications = useAppSelector(getNotifications);
  useEffect(() => {
    showNotifications(notifications);
  }, [notifications]);

  return <>{children}</>;
};

export default Wrapper;
