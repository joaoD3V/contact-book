import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    div {
      border: 4px solid ${theme.colors.gray[100]};
      border-top: 4px solid ${theme.colors.cyan[500]};
      border-radius: 50%;
      width: 80px;
      height: 80px;
      animation: spin 2s linear infinite;

      @keyframes spin {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    }
  `}
`;
