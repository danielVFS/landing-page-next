import styled, { css } from 'styled-components';

export const Container = styled.a`
  ${({ theme }) => css`
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    z-index: 6;

    background: ${theme.colors.primaryColor};
    color: ${theme.colors.white};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 5rem;
    height: 5rem;
    opacity: 0.7;
  `}
`;
