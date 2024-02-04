import type { Meta, StoryObj } from '@storybook/react';
import ThemeDecorator from 'shared/config/DecoratorsStorybook/ThemeDecorator';
import { Theme } from 'app/providers/theme';
import { Button, ButtonSize, ButtonTheme } from './Button';

const meta = {
  title: 'shared/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Text',
  },

};

export const Clear: Story = {
  args: {
    children: 'Text',
    themeButton: ButtonTheme.CLEAR,
  },

};
export const Outline: Story = {
  args: {
    children: 'Text',
    themeButton: ButtonTheme.OUTLINE,
  },
};

export const OutlineDark: Story = {
  args: {
    children: 'Text',
    themeButton: ButtonTheme.OUTLINE,
  },
  decorators: [(Story) => (
    <ThemeDecorator theme={Theme.DARK}>
      <Story />
    </ThemeDecorator>
  )],
};

export const Background: Story = {
  args: {
    children: 'Text',
    themeButton: ButtonTheme.BACKGROUND,
  },
};
export const BackgroundInverted: Story = {
  args: {
    children: 'Text',
    themeButton: ButtonTheme.BACKGROUND_INVERTED,
  },
};

export const SquareSizeM: Story = {
  args: {
    children: '>',
    themeButton: ButtonTheme.BACKGROUND_INVERTED,
    isSquare: true,
    size: ButtonSize.M,
  },
};
export const SquareSizeL: Story = {
  args: {
    children: '>',
    themeButton: ButtonTheme.BACKGROUND_INVERTED,
    isSquare: true,
    size: ButtonSize.L,
  },
};

export const SquareSizeXL: Story = {
  args: {
    children: '>',
    themeButton: ButtonTheme.BACKGROUND_INVERTED,
    isSquare: true,
    size: ButtonSize.XL,
  },
};
