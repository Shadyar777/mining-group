import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AppState } from '.';

export interface User {
  id: string;
  name: string;
  email: string;
}
const initialState: Array<User> = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@test.com',
  },
];
const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.push(action.payload);
    },
  },
});
export const userSelector = (state: AppState) => state;
export const { addUser } = userSlice.actions;
export default userSlice.reducer;
