import { ThemeProvider } from 'styled-components';
import { screen } from '@testing-library/react';

import { Heading } from '.';
import { renderTheme } from '../../styles/render-theme';
import { theme } from '../../styles/theme';

describe('<Heading />', () => {
  it('should render with default values', () => {
    renderTheme(<Heading>Text</Heading>);

    const heading = screen.getByRole('heading', { name: 'Text' });

    expect(heading).toHaveStyle({
      color: theme.colors.primaryColor,
      'font-size': theme.font.sizes.xhuge,
      'text-transform': 'none',
    });
  });

  it('should render with white color', () => {
    renderTheme(<Heading colorDark={false}>Text</Heading>);

    const heading = screen.getByRole('heading', { name: 'Text' });

    expect(heading).toHaveStyle({
      color: theme.colors.white,
    });
  });

  it('should render correct heading sizes', () => {
    const { rerender } = renderTheme(<Heading size="small">Text</Heading>);
    const heading = screen.getByRole('heading', { name: 'Text' });

    expect(heading).toHaveStyle({
      'font-size': theme.font.sizes.medium,
    });

    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="medium">Text</Heading>
      </ThemeProvider>,
    );

    expect(screen.getByRole('heading', { name: 'Text' })).toHaveStyle({
      'font-size': theme.font.sizes.large,
    });

    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="big">Text</Heading>
      </ThemeProvider>,
    );

    expect(screen.getByRole('heading', { name: 'Text' })).toHaveStyle({
      'font-size': theme.font.sizes.xlarge,
    });

    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="huge">Text</Heading>
      </ThemeProvider>,
    );

    expect(screen.getByRole('heading', { name: 'Text' })).toHaveStyle({
      'font-size': theme.font.sizes.xhuge,
    });
  });

  it('should render correct font-size when using mobile', () => {
    renderTheme(<Heading size="huge">Text</Heading>);
    const heading = screen.getByRole('heading', { name: 'Text' });

    expect(screen.getByRole('heading', { name: 'Text' })).toHaveStyleRule(
      'font-size',
      theme.font.sizes.xlarge,
      {
        media: theme.media.lteMedium,
      },
    );
  });

  it('should render with uppercase letters', () => {
    renderTheme(<Heading uppercase>Text</Heading>);

    const heading = screen.getByRole('heading', { name: 'Text' });

    expect(heading).toHaveStyle({
      'text-transform': 'uppercase',
    });
  });

  it('should render correct heading element', () => {
    const { container } = renderTheme(<Heading as="h6">Text</Heading>);

    const h6 = container.querySelector('h6');

    expect(h6.tagName.toLowerCase()).toBe('h6');
  });
});
