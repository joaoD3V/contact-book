import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Main = styled.main`
  ${({ theme }) => css`
    width: 720px;
    max-width: 720px;
    margin: 0 auto;
    border: 1px solid ${theme.colors.gray[100]};
    border-radius: 8px;
    height: 900px;
    padding: 18px;
    overflow: hidden;
    max-height: 900px;
    position: relative;

    ${media.lessThan('huge')`
      margin: 0 auto;
      max-height: 100vh;
      height: 100vh;
      overflow: hidden;
    `}
  `}
`;
