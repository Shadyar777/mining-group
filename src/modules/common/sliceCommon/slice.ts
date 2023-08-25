import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppState } from '../../../store';
import { TLanguage } from '../types';
import { VariantType } from 'notistack';

export interface Admin {
  globalLanguages: TLanguage;
  localLanguages: TLanguage;
  notifications: {
    message: string;
    options: {
      variant: VariantType;
    };
  } | null;
}

const defaultLanguage = 'ru';

const initialState: Admin = {
  globalLanguages: defaultLanguage,
  localLanguages: defaultLanguage,
  notifications: null,
};
const commonSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    addGlobalLanguages: (state, { payload }: PayloadAction<TLanguage>) => {
      state.globalLanguages = payload;
    },
    enqueueSnackbar: (
      state,
      action: PayloadAction<{
        message: string;
        options: {
          variant: VariantType;
        };
      }>,
    ) => {
      state.notifications = action.payload;
    },
    resetEnqueueSnackbar: (state) => {
      state.notifications = null;
    },
  },
});
export const getAddGlobalLanguages = (state: AppState) =>
  state.common.globalLanguages;
export const getNotifications = (state: AppState) => state.common.notifications;
export const { addGlobalLanguages, enqueueSnackbar, resetEnqueueSnackbar } =
  commonSlice.actions;
export default commonSlice.reducer;
