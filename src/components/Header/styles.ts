import styled, { css } from 'styled-components';

export const Header = styled.header`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 0.5px solid ${theme.colors.gray[200]};
    padding-bottom: ${theme.spacings.sm};
    margin-bottom: ${theme.spacings.lg};

    h3 {
      font-weight: 500;
      font-size: ${theme.font.sizes.xlarge};
      color: ${theme.colors.gray[100]};
    }

    div {
      display: flex;
      gap: ${theme.spacings.sm};
    }

    button {
      background-color: transparent;
      color: ${theme.colors.gray[100]};
      transition: ${theme.transition.fast};

      &:hover {
        filter: brightness(0.8);
      }
    }
  `}
`;

export const HeaderContact = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
