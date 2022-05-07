// External modules
import { css } from '@emotion/react';

// Internal modules
import { flex, flexWrap, gapMd, gapSm } from '@/styles/shared';
import media from '@/styles/media';

export const list = css`
  ${flex}
  ${flexWrap}
  ${gapSm}
  ${media.md} {
    ${gapMd}
  }
`;
