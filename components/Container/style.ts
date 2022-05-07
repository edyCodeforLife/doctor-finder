// External modules
import { css } from '@emotion/react';

// Internal modules
import { flexCenter, flexColumn, gapMd, paddingMd } from '@/styles/shared';
import media from '@/styles/media';

export const container = css`
  ${flexCenter}
  ${flexColumn}
  ${gapMd}
  ${paddingMd}
  margin: 0 auto;
  ${media.lg} {
    max-width: 768px;
  }
  ${media.xl} {
    max-width: 1024px;
  }
`;
