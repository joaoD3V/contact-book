import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings['3xl']} 0;
    overflow-y: hidden;

    ${media.lessThan('huge')`
      padding: 0;
    `}
  `}
`;
