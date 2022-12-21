import styled, { css } from 'styled-components';

type WrapperProps = {
  isInvalid: boolean;
  bgColor: 'primary' | 'secondary';
};

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, isInvalid, bgColor }) => css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.8rem;
    width: 100%;

    label {
      font-size: ${theme.font.sizes.small};
      margin-bottom: 0.2rem;
    }

    span {
      color: red;
      font-weight: 300;
      word-break: break-all;
    }

    div {
      width: 100%;
      max-width: 100%;
      height: 44px;
      background-color: ${bgColor === 'secondary'
        ? theme.colors.gray[800]
        : theme.colors.gray[900]};
      border-radius: 0.8rem;
      display: flex;
      align-items: center;
      gap: 0.8rem;
      padding: 0.8rem 1.6rem;

      ${isInvalid &&
      `
        outline: 1px solid red;
      `}

      &:focus-within {
        outline: 1px solid ${isInvalid ? 'red' : theme.colors.gray[100]};
      }

      input {
        flex: 1;
        height: 100%;
        font-size: ${theme.font.sizes.xlarge};
        background-color: transparent;
        border: 0;
        color: ${theme.colors.gray[100]};
        outline: none;

        &::placeholder {
          color: ${theme.colors.gray[200]};
          filter: brightness(0.6);
        }

        &:read-only {
          cursor: not-allowed;
          outline: none;
        }
      }
    }
  `}
`;
