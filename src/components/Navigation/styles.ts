import styled, { css } from 'styled-components';

type WrapperProps = {
  isContactView: boolean;
};

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, isContactView }) => css`
    width: 100%;
    height: 80px;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: ${theme.colors.gray[800]};
    display: flex;
    align-items: center;

    ${isContactView
      ? `
      justify-content: center;
      gap: 11.2rem;
    `
      : `
      justify-content: space-between;
      padding: 0 4.8rem;
    `}

    button {
      background-color: transparent;
      color: ${theme.colors.gray[100]};
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 0.4rem;
      transition: ${theme.transition.fast};

      &:hover {
        filter: brightness(0.8);
      }

      span {
        font-size: ${theme.font.sizes.small};
        font-weight: 300;
      }

      p {
        font-weight: 300;
        font-size: ${theme.font.sizes.xxlarge};
      }
    }
  `}
`;
