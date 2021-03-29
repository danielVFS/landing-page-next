import styled, { css } from 'styled-components';

export const Container = styled.a`
  ${({ theme }) => css`
    display: block;
    text-decoration: none;
    font-size: ${theme.font.sizes.xmedium};
    padding: ${theme.spacings.small};
    color: ${theme.colors.primaryColor};
    position: relative;

    &::after {
      content: '';
      position: absolute;
      left: 50%;
      bottom: 0.76rem;
      width: 0;
      height: 0.2rem;
      background: ${theme.colors.secondaryColor};
      transition: all 300ms ease-in-out;
    }

    &:hover::after {
      left: 25%;
      width: 50%;
    }
  `}
`;
