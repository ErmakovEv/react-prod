import type { Preview } from '@storybook/react';
import ThemeDecorator from 'shared/config/DecoratorsStorybook/ThemeDecorator';
import { Theme } from 'app/providers/themeProvider';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { StateSchema } from 'app/providers/storeProvider/StateSchema';
import { userReducer } from 'entities/User';
import { loginReducer } from 'features/AuthByUserName/model/slice/loginSlice';

const initialState = {
  counter: {
    value: 10,
  },
  user: {},
  loginForm: {
    username: '',
    password: '',
    isLoading: false,
  },
};

const store = configureStore<StateSchema>({
  reducer: { counter: counterReducer, user: userReducer, loginForm: loginReducer },
  preloadedState: initialState,
});

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <Provider store={store}>
        <ThemeDecorator theme={Theme.LIGHT}>
          <Story />
        </ThemeDecorator>
      </Provider>

    ),
  ],
};

export default preview;
