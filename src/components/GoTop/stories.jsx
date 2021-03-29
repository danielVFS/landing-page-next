import { GoTop } from '.';

export default {
  title: 'GoTop',
  component: GoTop,
};

export const Template = (args) => {
  return (
    <div style={{ height: '400vh' }}>
      <GoTop {...args} />
    </div>
  );
};
