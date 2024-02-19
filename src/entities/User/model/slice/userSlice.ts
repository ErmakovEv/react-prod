import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { USER_LOCALSTORAGE_KEY } from 'shared/constants/localStorage';
import { User, UserSchema } from '../types/userSchema';

const initialState: UserSchema = {
  authDate: { id: null, username: '' },
};
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      state.authDate = action.payload;
    },
    initAuthData: (state) => {
      const userData = localStorage.getItem(USER_LOCALSTORAGE_KEY);
      if (userData) {
        state.authDate = JSON.parse(userData);
      }
    },
    logout: (state) => {
      localStorage.removeItem(USER_LOCALSTORAGE_KEY);
      state.authDate = undefined;
    },
  },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
