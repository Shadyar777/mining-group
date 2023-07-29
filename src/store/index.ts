import {
  createAsyncThunk,
  Action,
  ThunkAction,
  configureStore,
} from '@reduxjs/toolkit';
import userSlice from './userSlice';
export const store = configureStore({
  reducer: {
    userSlice,
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
