import {
  createAsyncThunk,
  Action,
  ThunkAction,
  configureStore,
} from '@reduxjs/toolkit';
import adminSlice from '../modules/admin/signIn/slice.ts';

export const store = configureStore({
  reducer: {
    admin: adminSlice,
  },
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
