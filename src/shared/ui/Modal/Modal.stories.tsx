import type { Meta, StoryObj } from '@storybook/react';
import ThemeDecorator from 'shared/config/DecoratorsStorybook/ThemeDecorator';
import { Theme } from 'app/providers/themeProvider';
import { Modal } from './Modal';

const meta = {
  title: 'shared/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque dicta doloremque enim esse ex excepturi id illum in ipsum iste laborum laudantium magni molestias necessitatibus numquam perferendis, quas quis quisquam recusandae saepe sunt suscipit ut? A alias amet asperiores doloremque ducimus earum eligendi excepturi expedita, modi obcaecati praesentium quas quasi qui quidem ratione rem, vero! Aliquid consequatur dignissimos dolore eveniet porro quidem, quisquam. Amet animi cupiditate nam natus nostrum placeat, veniam? Accusamus accusantium commodi consectetur delectus, deleniti doloremque ea ex exercitationem expedita harum id impedit in maiores nam nemo neque nisi odit officia omnis pariatur, quod repellat vel voluptatum.',
  },
};

export const OutlineDark: Story = {
  args: {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque dicta doloremque enim esse ex excepturi id illum in ipsum iste laborum laudantium magni molestias necessitatibus numquam perferendis, quas quis quisquam recusandae saepe sunt suscipit ut? A alias amet asperiores doloremque ducimus earum eligendi excepturi expedita, modi obcaecati praesentium quas quasi qui quidem ratione rem, vero! Aliquid consequatur dignissimos dolore eveniet porro quidem, quisquam. Amet animi cupiditate nam natus nostrum placeat, veniam? Accusamus accusantium commodi consectetur delectus, deleniti doloremque ea ex exercitationem expedita harum id impedit in maiores nam nemo neque nisi odit officia omnis pariatur, quod repellat vel voluptatum.',
  },
  decorators: [(Story) => (
    <ThemeDecorator theme={Theme.DARK}>
      <Story />
    </ThemeDecorator>
  )],
};
