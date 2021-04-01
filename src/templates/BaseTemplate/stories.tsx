import { Meta, Story } from '@storybook/react/types-6-0';
import { BaseTemplate, BaseTemplateProps } from '.';

import { mockBase } from './mock';

export default {
  title: 'BaseTemplate',
  component: BaseTemplate,
  args: mockBase,
} as Meta;

export const Template: Story<BaseTemplateProps> = (args) => {
  return (
    <div>
      <BaseTemplate {...args} />
    </div>
  );
};
