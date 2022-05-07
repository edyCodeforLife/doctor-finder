// External modules
import { css } from '@emotion/react';

// Internal modules
import media from '@/styles/media';

// Internal modules
import {
  borderRadius,
  borderSoft,
  boxShadow,
  paddingMd,
  paddingSm,
} from '@/styles/shared';

export const card = css`
  ${borderSoft}
  ${borderRadius}
  ${paddingSm}
  ${boxShadow}
  margin: 0 auto;
  ${media.md} {
    ${paddingMd}
  }
`;
