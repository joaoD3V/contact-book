import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const FormWrapper = styled.form``;

export const FormScrollView = styled.div`
  ${({ theme }) => css`
    height: 780px;
    padding-top: 0.8rem;

    ${media.lessThan('huge')`
      height: 530px;
    `}

    overflow-y: auto;

    scrollbar-width: thin;
    scrollbar-color: transparent transparent;

    &::-webkit-scrollbar {
      width: 3px;
    }

    &::-webkit-scrollbar-track {
      background: ${theme.colors.gray[900]};
    }

    &::-webkit-scrollbar-track {
      background: ${theme.colors.gray[900]};
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${theme.colors.gray[100]};
      border-radius: 20px;
      border: 3px solid white;
    }
  `}
`;

export const FormContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: ${theme.spacings.md};
  `}
`;

export const FieldsGroup = styled.div`
  ${({ theme }) => css`
    width: 500px;
    background-color: ${theme.colors.gray[800]};
    border-radius: 0.8rem;
    display: flex;
    flex-direction: column;
    padding: 0.8rem 1.6rem;
  `}
`;

export const Info = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: flex-start;
    gap: ${theme.spacings.xs};
  `}
`;

export const Group = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.xs};
    width: 100%;
  `}
`;

export const Field = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    width: 100%;
    position: relative;

    input {
      flex: 1;
      font-size: ${theme.font.sizes.xlarge};
      background-color: transparent;
      outline: 0;
      border: 0;
      color: ${theme.colors.gray[100]};
    }
  `}
`;

export const CategoryButton = styled.button`
  ${({ theme }) => css`
    width: max-content;
    display: flex;
    align-items: center;
    gap: 0.2rem;
    font-size: ${theme.font.sizes.small};
    background-color: transparent;
    color: ${theme.colors.gray[100]};
    font-weight: 300;
    transition: filter ${theme.transition.fast};

    &:hover {
      filter: brightness(0.8);
    }
  `}
`;

export const AddressButton = styled.button`
  ${({ theme }) => css`
    flex: 1;
    align-self: flex-start;
    font-size: ${theme.font.sizes.xlarge};
    background-color: transparent;
    outline: 0;
    border: 0;
    color: ${theme.colors.gray[100]};
    transition: filter ${theme.transition.fast};

    &:hover {
      filter: brightness(0.8);
    }
  `}
`;

export const RemoveField = styled.button`
  ${({ theme }) => css`
    position: absolute;
    top: 2px;
    right: 0;
    background-color: transparent;
    color: ${theme.colors.gray[100]};
    transition: filter ${theme.transition.fast};

    &:hover {
      filter: brightness(0.8);
    }
  `}
`;

export const AddNewField = styled.button`
  ${({ theme }) => css`
    border-top: 1px solid ${theme.colors.gray[200]};
    background-color: transparent;
    margin-top: 1.4rem;
    padding-top: ${theme.spacings.xs};
    padding-bottom: 0.4rem;

    span {
      color: ${theme.colors.gray[200]};
      font-weight: 300;
      font-size: ${theme.font.sizes.medium};
      display: flex;
      align-items: center;
      gap: ${theme.spacings.sm};

      transition: filter ${theme.transition.fast};
    }

    &:hover {
      span {
        filter: brightness(0.8);
      }
    }
  `}
`;

export const ContactGroup = styled.button`
  ${({ theme }) => css`
    width: 500px;
    height: 44px;
    background-color: ${theme.colors.gray[800]};
    border-radius: 0.8rem;
    display: flex;
    align-items: center;
    gap: 0.8rem;
    padding: 0.8rem 1.6rem;
    font-size: ${theme.font.sizes.xlarge};
    color: ${theme.colors.gray[100]};
    transition: filter ${theme.transition.fast};

    &:hover {
      filter: brightness(0.8);
    }
  `}
`;
