import { BaseTemplate } from '.';

import mock, { mockBase } from './mock';

export default {
  title: 'BaseTemplate',
  component: BaseTemplate,
  args: mockBase,
};

export const Template = (args) => {
  return (
    <div>
      <BaseTemplate {...args} />
    </div>
  );
};
