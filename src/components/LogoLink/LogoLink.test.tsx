import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { LogoLink } from '.';

describe('<LogoLink />', () => {
  it('should render text logo', () => {
    renderTheme(<LogoLink link="#target" text="Hello World" />);

    expect(
      screen.getByRole('heading', { name: 'Hello World' }),
    ).toBeInTheDocument();

    expect(screen.getByRole('link', { name: 'Hello World' })).toHaveAttribute(
      'href',
      '#target',
    );
  });

  it('should render logo img', () => {
    renderTheme(
      <LogoLink link="#target" text="Hello World" srcImg="image.jpg" />,
    );

    expect(screen.getByAltText('Hello World')).toHaveAttribute(
      'src',
      'image.jpg',
    );
  });

  it('should render internal link', () => {
    renderTheme(<LogoLink link="/" text="Hello World" srcImg="image.jpg" />);

    expect(screen.getByAltText('Hello World')).toHaveAttribute(
      'src',
      'image.jpg',
    );
  });

  it('should render internal link with text only', () => {
    renderTheme(<LogoLink link="/" text="Hello World" />);

    expect(
      screen.getByRole('heading', { name: 'Hello World' }),
    ).toBeInTheDocument();
  });

  it('should render a link with target blank', () => {
    renderTheme(<LogoLink link="/" text="Hello World" newTab={true} />);

    expect(
      screen.getByRole('heading', { name: 'Hello World' }),
    ).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(
      <LogoLink link="#target" text="Hello World" srcImg="image.jpg" />,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
