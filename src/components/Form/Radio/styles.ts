import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 0.8rem;

    input {
      width: 16px;
      height: 16px;
      accent-color: ${theme.colors.gray[800]};
    }

    label {
      font-size: ${theme.font.sizes.large};
      font-weight: 400;
    }
  `}
`;
