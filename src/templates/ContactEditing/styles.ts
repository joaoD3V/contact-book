import styled, { css } from 'styled-components';

export const Wrapper = styled.div``;

export const Form = styled.form`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: ${theme.spacings.md};
    width: 100%;
  `}
`;
