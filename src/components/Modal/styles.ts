import styled, { css } from 'styled-components';

export const Wrapper = styled.div``;

export const ModalHeader = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: ${theme.spacings.xl};

    h3 {
      font-size: ${theme.font.sizes.xlarge};
      font-weight: 600;
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${theme.colors.gray[100]};
      background-color: transparent;
      transition: filter ${theme.transition.fast};

      &:hover {
        filter: brightness(0.8);
      }
    }
  `}
`;
