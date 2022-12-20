import styled, { css } from 'styled-components';

export const Wrapprer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.8rem;

    label {
      font-size: ${theme.font.sizes.small};
      margin-bottom: 0.2rem;
    }
  `}
`;

type SelectProps = {
  isInvalid: boolean;
};

export const Select = styled.select<SelectProps>`
  ${({ theme, isInvalid }) => css`
    background-color: ${theme.colors.gray[900]};
    color: ${theme.colors.gray[100]};
    font-size: ${theme.font.sizes.xlarge};
    padding: 0.8rem;
    border-radius: 0.8rem;

    ${isInvalid &&
    `
      outline: 1px solid red !important;
    `}

    &:focus-within {
      outline: 1px solid ${isInvalid ? 'red' : theme.colors.gray[100]};
    }
  `}
`;
