import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppState } from '../../../store';
import { TLanguage } from '../types';

export interface Admin {
  globalLanguages: TLanguage;
  localLanguages: TLanguage;
}

const defaultLanguage = 'ru';

const initialState: Admin = {
  globalLanguages: defaultLanguage,
  localLanguages: defaultLanguage,
};
const commonSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    addGlobalLanguages: (state, { payload }: PayloadAction<TLanguage>) => {
      state.globalLanguages = payload;
    },
  },
});
export const getAddGlobalLanguages = (state: AppState) =>
  state.common.globalLanguages;
export const { addGlobalLanguages } = commonSlice.actions;
export default commonSlice.reducer;
