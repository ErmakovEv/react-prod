import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User, userActions } from 'entities/User';
import i18n from 'shared/config/i18n/i18n';
import { USER_LOCALSTORAGE_KEY } from 'shared/constants/localStorage';

interface LoginByUserNameProps {
  username: string;
  password: string
}

export const loginByUsername = createAsyncThunk<User, LoginByUserNameProps,
{ rejectValue: string, }>(
  'login/loginByUsername',
  async ({ username, password }, thunkAPI) => {
    try {
      const response = await axios.post('http://localhost:8000/login', {
        username, password,
      });

      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
      thunkAPI.dispatch(userActions.setAuthData(response.data));

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(i18n.t('Ошибка аторизации'));
    }
  },
);
