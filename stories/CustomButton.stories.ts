import type { Meta, StoryObj } from '@storybook/react';

import { CustomButton } from '../components';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof CustomButton> = {
    component: CustomButton,
  };
  
  export default meta;
  type Story = StoryObj<typeof CustomButton>;
  
  export const Primary: Story = {
    args: {
      title: 'Button',
      containerStyles:'w-full py-[16px] rounded-full bg-primary-blue',
      textStyles:'text-white text-[14px] leading-[17px] font-bold'
    },
  };