import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const AddContact = styled.button`
  ${({ theme }) => css`
    width: 6.4rem;
    height: 6.4rem;
    border-radius: 6.4rem;
    background-color: ${theme.colors.cyan[500]};
    position: absolute;
    right: 1.8rem;
    bottom: 1.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: ${theme.transition.fast};

    &:hover {
      filter: brightness(0.8);
    }
  `}
`;
