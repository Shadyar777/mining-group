import { FC, ReactElement, useEffect } from 'react';
import i18n from 'i18next';
import { enqueueSnackbar } from 'notistack';
import { useAppDispatch, useAppSelector } from './store/hooks.ts';
import {
  Admin,
  getNotifications,
  resetEnqueueSnackbar,
} from './modules/common/sliceCommon/slice.ts';
import { TLanguage } from './modules/common/types';

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

  useEffect(() => {
    const savedLanguage = sessionStorage.getItem(
      'selectedLanguage',
    ) as TLanguage | null;
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage).then((res) => {
        console.log('res', res);
      });
    }
  }, []);

  return <>{children}</>;
};

export default Wrapper;
