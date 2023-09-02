import type { Meta, StoryObj } from '@storybook/vue3';

import Button from '../components/Button.vue';

const meta = {
  title: 'Example/Button',
  component: Button,
 
  tags: ['autodocs'],
  args: { title: 'Search' },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

