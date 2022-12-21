import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SearchAreaScroll = styled.div`
  ${({ theme }) => css`
    max-height: 350px;
    overflow-y: auto;

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

export const SearchArea = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings['xl']};
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.xs};
  `}
`;

export const DisplayName = styled.button`
  ${({ theme }) => css`
    background-color: transparent;
    width: 100%;
    display: flex;
    align-items: center;
    border-bottom: 0.5px solid ${theme.colors.gray[200]};
    width: 100%;
    padding-bottom: 1.2rem;
    transition: ${theme.transition.fast};

    &:last-child {
      border-bottom: 0;
      padding-bottom: 0;
    }

    &:hover {
      p {
        filter: brightness(0.8);
      }
    }

    p {
      color: ${theme.colors.gray[100]};
      font-size: 2.2rem;
      font-weight: 400;
    }
  `}
`;
