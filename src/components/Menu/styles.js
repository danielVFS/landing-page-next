import styled, { css } from 'styled-components';

import { Container as SectionContainer } from '../SectionContainer/styles';
import { Title as Heading } from '../Heading/styles';

const menuVisible = (theme) => css`
  visibility: visible;
  opacity: 1;
`;

export const Container = styled.div`
  ${({ theme, visible }) => css`
    position: fixed;
    z-index: 5;
    top: 0;
    right: 0;
    left: 0;
    width: 100%;
    border-bottom: ${theme.colors.mediumGray};
    background: ${theme.colors.white};
    transition: all 300ms ease-in-out;

    > ${SectionContainer} {
      padding-bottom: 0;
      padding-top: 0;
    }

    & ${Heading} {
      margin-bottom: 0;
      margin-top: 0;
    }

    @media ${theme.media.lteMedium} {
      height: 100vh;
      visibility: hidden;
      opacity: 0;
      ${visible && menuVisible(theme)}

      > ${SectionContainer} {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        height: 100vh;
        align-items: center;
        margin: 0;
        overflow-y: auto;
      }

      & ${Heading} {
        padding-bottom: ${theme.spacings.small};
        display: flex;
        justify-content: center;
      }
    }
  `}
`;

export const MenuContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media ${theme.media.lteMedium} {
      display: block;
      text-align: center;
      padding: ${theme.spacings.small} 0;
    }
  `}
`;

export const Button = styled.button`
  ${({ theme, visible }) => css`
    position: fixed;
    z-index: 6;
    top: 2rem;
    right: 2rem;
    width: 4rem;
    height: 4rem;
    border: none;
    background: ${theme.colors.primaryColor};
    color: ${theme.colors.white};
    display: none;
    pointer-events: ${visible ? 'none' : 'all'};

    @media ${theme.media.lteMedium} {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    > svg {
      width: 3rem;
      height: 3rem;
    }
  `}
`;
