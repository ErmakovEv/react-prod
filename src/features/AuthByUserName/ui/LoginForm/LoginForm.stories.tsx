import type { Meta, StoryObj } from '@storybook/react';
import { StoreProvider } from 'app/providers/storeProvider';
import { StateSchema } from 'app/providers/storeProvider/StateSchema';
import { LoginForm } from './LoginForm';

const meta = {
  title: 'features/LoginForm',
  component: LoginForm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
};

export const Load: Story = {
  args: {
  },
  decorators: [(Story) => (
    <StoreProvider initialState={{
      loginForm: {
        username: 'test',
        password: 'test',
        isLoading: true,
      },
    } as StateSchema}
    >
      <Story />
    </StoreProvider>
  )],
};

export const Error: Story = {
  args: {
  },
  decorators: [(Story) => (
    <StoreProvider initialState={{
      loginForm: {
        username: 'test',
        password: 'test',
        error: 'Error',
      },
    } as StateSchema}
    >
      <Story />
    </StoreProvider>
  )],
};
