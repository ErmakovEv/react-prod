import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { loginReducer } from 'features/AuthByUserName';
import { StateSchema } from './StateSchema';

export function createReduxStore(initialState?: StateSchema) {
  return configureStore<StateSchema>({
    reducer: { counter: counterReducer, user: userReducer, loginForm: loginReducer },
    devTools: DEV,
    preloadedState: initialState,
  });
}

const store = createReduxStore();
export type AppDispatch = typeof store.dispatch;
