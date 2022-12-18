import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.md};
    width: 100%;
    height: 750px;
    max-height: 750px;

    ${media.lessThan('huge')`
    height: 520px;
    max-height: 520px;
    `}

    overflow-y: scroll;

    scrollbar-width: thin;
    scrollbar-color: transparent transparent;

    &::-webkit-scrollbar {
      width: 3px;
    }

    &::-webkit-scrollbar-track {
      background: ${theme.colors.gray[900]};
    }

    &::-webkit-scrollbar-track {
      background: ${theme.colors.gray[900]};
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${theme.colors.gray[100]};
      border-radius: 20px;
      border: 3px solid white;
    }
  `}
`;
