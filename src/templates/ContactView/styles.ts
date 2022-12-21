import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
`;

export const Content = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h1 {
      font-weight: 400;
      font-size: 3.2rem;
      color: ${theme.colors.gray[100]};
    }
  `}
`;

export const Phones = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: ${theme.spacings['2xs']};
    margin-top: ${theme.spacings.lg};
    padding: 2.4rem 2.8rem;
    border: 1px solid ${theme.colors.gray[100]};
    border-radius: 0.8rem;

    div {
      display: flex;
      align-items: center;
      gap: 0.4rem;

      span {
        color: ${theme.colors.gray[200]};
        font-weight: 300;
        font-size: ${theme.font.sizes.small};
      }

      h2 {
        color: ${theme.colors.gray[100]};
        font-weight: 300;
        font-size: 2.2rem;
      }
    }
  `}
`;

export const Email = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacings['2xs']};
    margin-top: 1.2rem;

    p {
      color: ${theme.colors.gray['100']};
      font-weight: 300;
      font-size: ${theme.font.sizes.medium};
    }
  `}
`;

export const AddressesList = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings['5xl']};
    display: flex;
    flex-direction: column;
    gap: 2.8rem;
    height: 400px;
    max-height: 400px;

    ${media.lessThan('huge')`
      height: 200px;
      max-height: 200px;
      margin-top: ${theme.spacings['xl']};
    `}

    ${media.lessThan('large')`
        max-width: 90vw;
        overflow-x: hidden;
        height: 250px;
        max-height: 250px;
    `}

    @media (max-width: 350px) {
      height: 150px;
      max-height: 150px;
    }

    overflow-y: scroll;

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

export const Addresses = styled.div`
  ${({ theme }) => css`
    border-top: 1px solid ${theme.colors.gray[100]};
    width: 518px;
    padding-top: 1.2rem;
    padding-left: 0.8rem;

    h4 {
      font-weight: 300;
      font-size: ${theme.font.sizes.large};
      color: ${theme.colors.gray[100]};
      margin-bottom: 1.2rem;
    }
  `}
`;

export const AddressInfo = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;

    p {
      color: ${theme.colors.gray[100]};
      font-weight: 300;
      font-size: ${theme.font.sizes.medium};
    }
  `}
`;

export const AddressField = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 0.4rem;

    span {
      color: ${theme.colors.gray[200]};
      font-weight: 300;
      font-size: ${theme.font.sizes.small};
    }

    p {
      color: ${theme.colors.gray[100]};
      font-weight: 300;
      font-size: ${theme.font.sizes.medium};
    }
  `}
`;
