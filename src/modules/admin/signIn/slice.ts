import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AppState } from '../../../store';

export interface Admin {
  admin: {
    login: string;
    password: string;
  };
}

const initialState: Admin = {
  admin: {
    login: 'qwerty',
    password: 'qwerty',
  },
};
const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    addAdmin: (state, { payload }: PayloadAction<Admin>) => {
      state.admin = payload.admin;
    },
  },
});
export const getAdmin = (state: AppState) => state.admin;
export const { addAdmin } = adminSlice.actions;
export default adminSlice.reducer;
