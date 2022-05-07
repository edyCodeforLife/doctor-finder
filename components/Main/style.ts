// External modules
import { css } from '@emotion/react';

// Internal modules
import {
  borderRadius,
  borderSoft,
  colorDark,
  colorDusk,
  flex,
  flexColumn,
  fontBold,
  gapSm,
  itemsStart,
  justifyBetween,
  widthFull,
} from '@/styles/shared';
import media from '@/styles/media';

export const main = css`
  ${widthFull}
`;

export const notFound = css`
  ${colorDusk}
  ${fontBold}
  text-align: center;
`;

export const card = css`
  ${flex}
  ${gapSm}
  max-width: 482px;
  ${media.sm} {
    min-height: 165px;
    max-width: 359px;
  }
  ${media.md} {
    min-height: 215px;
    max-width: 482px;
  }
`;

export const left = css`
  ${flex}
  ${itemsStart}
  min-width: 100px;
  & > :first-of-type {
    ${borderSoft}
    ${borderRadius}
  }
`;

export const right = css`
  ${flex}
  ${flexColumn}
  ${gapSm}
  ${justifyBetween}
`;

export const heading = css`
  ${colorDark}
  font-size: 0.75rem;
  ${media.md} {
    font-size: 0.95rem;
  }
`;

export const subheading = css`
  ${colorDark}
  font-weight: normal;
  font-size: 0.75rem;
  ${media.md} {
    font-size: 0.95rem;
  }
`;

export const about = css`
  font-size: 0.7rem;
  word-break: break-all;
  overflow-y: auto;
  height: 60px;
  ${colorDusk};
  ${media.md} {
    font-size: 0.9rem;
    height: 80px;
  }
`;

export const info = css`
  ${flex}
  ${flexColumn}
  ${gapSm}
`;

export const price = css`
  font-size: 0.7rem;
  text-align: right;
  ${media.md} {
    font-size: 0.9rem;
  }
`;
