import type { Meta, StoryObj } from '@storybook/react';
import ThemeDecorator from 'shared/config/DecoratorsStorybook/ThemeDecorator';
import { Theme } from 'app/providers/themeProvider';
import { Input } from './Input';

const meta = {
  title: 'shared/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    placeholder: 'Test placeholder',
  },
};

export const Dark: Story = {
  args: {
    placeholder: 'Test placeholder',
  },
  decorators: [(Story) => (
    <ThemeDecorator theme={Theme.DARK}>
      <Story />
    </ThemeDecorator>
  )],
};
