import { SectionBackground } from '.';

export default {
  title: 'SectionBackground',
  component: SectionBackground,
  args: {
    children: (
      <div>
        <h1>Section Background</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor,
          assumenda, nostrum quam officia itaque sit delectus perferendis
          tenetur inventore hic iure nemo alias aliquam adipisci nihil
          laboriosam quaerat eius velit.
        </p>
      </div>
    ),
  },
  argTypes: {
    children: { type: '' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <SectionBackground {...args} />
    </div>
  );
};
