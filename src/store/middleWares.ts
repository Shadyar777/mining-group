import { Middleware } from 'redux';
import { enqueueSnackbar } from '../modules/common/sliceCommon/slice.ts';
import { goodsApi } from './rtkQuery.ts';
import {
  activitiesApi,
  fieldsApi,
  contactsApi,
  geoProdApi,
  homeApi,
  jobsApi,
  strategyApi,
  titleApi,
  valuesApi,
  fieldsPrivateByIdApi,
} from '../rtk-query';

export const rtkMiddleWares = [
  goodsApi.middleware,
  jobsApi.middleware,
  activitiesApi.middleware,
  strategyApi.middleware,
  valuesApi.middleware,
  homeApi.middleware,
  titleApi.middleware,
  geoProdApi.middleware,
  contactsApi.middleware,
  fieldsApi.middleware,
  fieldsPrivateByIdApi.middleware,
];

export const snackbarMiddleware: Middleware =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    if (action.type.endsWith('/reject') || action.error) {
      dispatch(
        enqueueSnackbar({
          // message: action.error.message || 'Что-то пошло не так',
          message: 'Что-то пошло не так',
          options: {
            variant: 'error',
          },
        }),
      );
    }

    return next(action);
  };
