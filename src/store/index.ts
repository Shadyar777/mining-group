import {
  Action,
  configureStore,
  createAsyncThunk,
  ThunkAction,
} from '@reduxjs/toolkit';
import adminSlice from '../modules/admin/signIn/slice.ts';
import commonSlice from '../modules/common/sliceCommon/slice.ts';
import { goodsApi } from './rtkQuery.ts';
import { activitiesApi, jobsApi, strategyApi } from '../rtk-query';
import { rtkMiddleWares } from './middleWares.ts';

export const store = configureStore({
  reducer: {
    admin: adminSlice,
    common: commonSlice,
    [goodsApi.reducerPath]: goodsApi.reducer,
    [jobsApi.reducerPath]: jobsApi.reducer,
    [activitiesApi.reducerPath]: activitiesApi.reducer,
    [strategyApi.reducerPath]: strategyApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([...rtkMiddleWares]),
});

export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export const createAppAsyncThunk = createAsyncThunk.withTypes<{
  state: AppState;
  dispatch: AppDispatch;
  rejectValue: unknown;
}>();
