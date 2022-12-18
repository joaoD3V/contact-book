import styled, { css } from 'styled-components';

type WrapperProps = {
  isInvalid: boolean;
};

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, isInvalid }) => css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.8rem;

    div {
      width: 500px;
      height: 44px;
      background-color: ${theme.colors.gray[800]};
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
        }
      }
    }
  `}
`;
