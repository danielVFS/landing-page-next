import { TextComponent } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Ea, aliquid commodi dignissimos maiores earum ratione nulla nam,
    ipsum velit, dicta quia accusamus aspernatur nisi architecto aut
    facilis ipsa! Asperiores, eaque.`,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
