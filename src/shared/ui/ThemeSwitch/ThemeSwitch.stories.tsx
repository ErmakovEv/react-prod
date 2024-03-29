import type { Meta, StoryObj } from '@storybook/react';
import ThemeDecorator from 'shared/config/DecoratorsStorybook/ThemeDecorator';
import { Theme } from 'app/providers/themeProvider';
import { ThemeSwitch } from './ThemeSwitch';

const meta = {
  title: 'shared/ThemeSwitch',
  component: ThemeSwitch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ThemeSwitch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
  },
};

export const Dark: Story = {
  args: {
  },
  decorators: [(Story) => (
    <ThemeDecorator theme={Theme.DARK}>
      <Story />
    </ThemeDecorator>
  )],
};
