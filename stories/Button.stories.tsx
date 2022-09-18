import React from 'react';
import { ComponentMeta } from '@storybook/react';

import { Button } from './Button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {},
} as ComponentMeta<typeof Button>;

export const Primary = (args: any) => (
  <Button width="231px" height="52px" size="14px" {...args}>
    REGISTER
  </Button>
);
