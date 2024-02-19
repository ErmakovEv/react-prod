import type { Meta, StoryObj } from '@storybook/react';
import ThemeDecorator from 'shared/config/DecoratorsStorybook/ThemeDecorator';
import { Theme } from 'app/providers/themeProvider';
import { Text, TextThema } from './Text';

const meta = {
  title: 'shared/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: 'Title',
    content: 'Content',
  },
};

export const Error: Story = {
  args: {
    title: 'Title',
    content: 'Content',
    thema: TextThema.ERROR,
  },
};

export const Dark: Story = {
  args: {
    title: 'Title',
    content: 'Content',
  },
  decorators: [(Story) => (
    <ThemeDecorator theme={Theme.DARK}>
      <Story />
    </ThemeDecorator>
  )],
};
