import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Form = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.sm};
    width: 100%;
    max-width: 100%;
  `}
`;

type GroupFieldsProps = {
  isFlex?: boolean;
  isJustifyContent?: boolean;
};

export const GroupFields = styled.div<GroupFieldsProps>`
  ${({ theme, isFlex }) => css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: ${theme.spacings.xs};
    max-width: 100%;
    width: 100%;

    ${media.lessThan('large')`
      grid-template-columns: 1fr 1fr;
    `}

    ${!!isFlex &&
    `
      display: flex;
      align-items: center;
    `}

    a {
      margin-top: ${theme.spacings.lg};
      color: ${theme.colors.gray[100]};
      font-size: ${theme.font.sizes.small};
      width: 150px;
    }
  `}
`;

export const Buttons = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacings.xs};
    margin-top: ${theme.spacings.sm};

    button {
      font-size: ${theme.font.sizes.xlarge};
      padding: 0.8rem 1.6rem;
      border-radius: 0.4rem;
      transition: filter ${theme.transition.fast};

      &:hover {
        filter: brightness(0.8);
      }
    }
  `}
`;

export const CancelButton = styled.button`
  ${({ theme }) => css`
    background-color: ${theme.colors.gray[800]};
    color: ${theme.colors.gray[100]};
    border: 1px solid ${theme.colors.gray[100]};
  `}
`;

export const SaveButton = styled.button`
  ${({ theme }) => css`
    background-color: ${theme.colors.gray[900]};
    color: ${theme.colors.gray[100]};
    border: 1px solid ${theme.colors.gray[100]};
  `}
`;
