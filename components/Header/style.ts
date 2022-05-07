// External modules
import { css } from '@emotion/react';

// Internal modules
import {
  colorPrimary,
  colorSecondary,
  flex,
  flexColumn,
  flexRow,
  gapSm,
  itemsCenter,
  itemsStart,
  widthFull,
} from '@/styles/shared';
import media from '@/styles/media';

export const header = css`
  ${flex}
  ${flexColumn}
  ${gapSm}
  ${widthFull}
  ${itemsCenter}
  ${media.sm} {
    ${itemsStart}
  }
`;

export const heading = css`
  font-size: 1.5rem;
  & > :first-of-type {
    ${colorPrimary}
  }
  & > :last-of-type {
    ${colorSecondary}
  }
`;

export const actions = css`
  ${flex}
  ${flexColumn}
  ${gapSm}
  ${widthFull}
  ${media.sm} {
    ${flexRow}
  }
`;
