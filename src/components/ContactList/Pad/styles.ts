import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    span {
      font-weight: 300;
      font-size: ${theme.font.sizes.large};
      color: ${theme.colors.gray[200]};
    }

    div {
      margin-top: 1.2rem;
      background-color: ${theme.colors.gray[800]};
      border-radius: 0.8rem;
      padding: 1.6rem 1.4rem;
      display: flex;
      flex-direction: column;
      gap: ${theme.spacings.xs};
    }
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
