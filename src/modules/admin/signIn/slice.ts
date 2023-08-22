import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AppState } from '../../../store';

export interface Admin {
  admin: {
    login: string;
    password: string;
  };
  private: {
    password: string;
    id: number;
  };
}

const initialState: Admin = {
  admin: {
    login: 'user',
    password: 'password',
  },
  private: {
    password: '',
    id: 0,
  },
};
const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    addAdmin: (state, { payload }: PayloadAction<Admin>) => {
      state.admin = payload.admin;
    },
    addPassword: (state, { payload }: PayloadAction<Admin['private']>) => {
      state.private = payload;
    },
  },
});
export const getAdmin = (state: AppState) => state.admin;
export const { addAdmin, addPassword } = adminSlice.actions;
export default adminSlice.reducer;
