import type { Meta, StoryObj } from '@storybook/vue3';

import Input from '../components/Input.vue';

const meta = {
  title: 'Example/Input',
  component: Input,
  
  tags: ['autodocs'],
  args: { type: 'text', placeholder: 'Type here' },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

