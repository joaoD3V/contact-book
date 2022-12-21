import styled, { css } from 'styled-components';

type WrapperProps = {
  isInvalid: boolean;
  bgColor: 'primary' | 'secondary';
  isSmall: boolean;
};

export const Wrapprer = styled.div<WrapperProps>`
  ${({ theme, isInvalid, bgColor, isSmall }) => css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.8rem;
    width: 100%;

    label {
      font-size: ${theme.font.sizes.small};
      margin-bottom: 0.2rem;
    }

    div {
      width: ${isSmall ? 'max-content;' : '100%;'}
      max-width: 100%;
      height: ${isSmall ? 'max-content;' : '44px;'};
      background-color: ${
        bgColor === 'secondary'
          ? theme.colors.gray[800]
          : theme.colors.gray[900]
      };
      border-radius: 0.8rem;
      display: flex;
      align-items: center;
      gap: 0.8rem;
      padding: ${isSmall ? 0 : '0.8rem 1.6rem;'};
      border-radius: 0.8rem;
      border: ${isSmall ? 0 : `1px solid ${theme.colors.gray[100]};`};

      ${
        isInvalid &&
        `
        outline: 1px solid red;
      `
      }

      &:focus-within {
        outline: 1px solid ${isInvalid ? 'red' : theme.colors.gray[100]};
      }
    }
  `}
`;

type SelectProps = {
  bgColor: 'primary' | 'secondary';
  isSmall: boolean;
};

export const Select = styled.select<SelectProps>`
  ${({ theme, bgColor, isSmall }) => css`
    background-color: ${bgColor === 'secondary'
      ? theme.colors.gray[800]
      : theme.colors.gray[900]};
    color: ${theme.colors.gray[100]};
    font-size: ${isSmall ? theme.font.sizes.small : theme.font.sizes.xlarge};
    font-weight: ${isSmall ? 300 : 400};
    padding: ${isSmall ? '0.2rem 0;' : '0.8rem;'};
    border: 0;
    outline: none;
    flex: 1;
  `}
`;
