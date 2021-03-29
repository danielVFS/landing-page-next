import { SectionContainer } from '.';

export default {
  title: 'SectionContainer',
  component: SectionContainer,
  args: {
    children: (
      <div>
        <h1>Section Container</h1>
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
      <SectionContainer {...args} />
    </div>
  );
};
