import styled, { css } from 'styled-components';

import { Title as HeadingContainer } from '../Heading/styles';
import { Container as TextComponent } from '../TextComponent/styles';

export const Container = styled.div`
  ${({ theme }) => css`
    ${TextComponent} {
      margin-bottom: ${theme.spacings.xhuge};
    }
  `}
`;

export const Grid = styled.div`
  ${({ theme }) => css`
    counter-reset: grid-counter;

    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: ${theme.spacings.large};

    overflow: hidden;
    width: 100%;

    @media ${theme.media.lteMedium} {
      grid-template-columns: 1fr;
    }
  `}
`;

export const GridElement = styled.div`
  ${({ theme }) => css`
    ${HeadingContainer} {
      position: relative;
      left: 5rem;
    }

    ${HeadingContainer}::before {
      position: absolute;
      counter-increment: grid-counter;
      content: counter(grid-counter);

      font-size: 7rem;
      top: -3rem;
      left: -5rem;
      transform: rotate(8deg);
    }
  `}
`;
