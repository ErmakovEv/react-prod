import type { Meta, StoryObj } from '@storybook/react';
import ThemeDecorator from 'shared/config/DecoratorsStorybook/ThemeDecorator';
// eslint-disable-next-line import/no-extraneous-dependencies
import { withRouter } from 'storybook-addon-react-router-v6';
import { Theme } from 'app/providers/themeProvider';
import { AppLink } from './AppLink';

const meta = {
  title: 'shared/AppLink',
  component: AppLink,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    to: '/',
  },
  decorators: [withRouter],
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    theme: Theme.LIGHT,
    children: 'Text',
  },

};

export const Dark: Story = {
  args: {
    theme: Theme.DARK,
  },
  decorators: [(Story) => (
    <ThemeDecorator theme={Theme.DARK}>
      <Story />
    </ThemeDecorator>
  )],
};
