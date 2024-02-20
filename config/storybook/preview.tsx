import type { Preview } from '@storybook/react';
import ThemeDecorator from 'shared/config/DecoratorsStorybook/ThemeDecorator';
import { Theme } from 'app/providers/themeProvider';
import { StoreProvider } from 'app/providers/storeProvider';
import { StateSchema } from 'app/providers/storeProvider/StateSchema';

const initialState: Partial<StateSchema> = {
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
      <StoreProvider initialState={initialState as StateSchema}>
        <ThemeDecorator theme={Theme.LIGHT}>
          <Story />
        </ThemeDecorator>
      </StoreProvider>
    ),
  ],
};

export default preview;
