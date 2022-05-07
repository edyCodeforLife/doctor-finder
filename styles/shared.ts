// External modules
import { css } from '@emotion/react';

export const flex = css`
  display: flex;
`;

export const flexWrap = css`
  flex-wrap: wrap;
`;

export const itemsStart = css`
  align-items: flex-start;
`;

export const itemsCenter = css`
  align-items: center;
`;

export const justifyCenter = css`
  justify-content: center;
`;

export const justifyBetween = css`
  justify-content: space-between;
`;

export const flexCenter = css`
  ${flex}
  ${itemsCenter}
  ${justifyCenter}
`;

export const flexColumn = css`
  flex-direction: column;
`;

export const flexRow = css`
  flex-direction: row;
`;

export const borderSoft = css`
  border: 1px solid var(--color-soft) !important;
`;

export const borderDusk = css`
  border: 1px solid var(--color-dusk) !important;
`;

export const borderRadius = css`
  border-radius: 10px;
`;

export const colorPrimary = css`
  color: var(--color-primary);
`;

export const colorSecondary = css`
  color: var(--color-secondary);
`;

export const colorSoft = css`
  color: var(--color-soft);
`;

export const colorDusk = css`
  color: var(--color-dusk);
`;

export const colorDark = css`
  color: var(--color-dark);
`;

export const fontBold = css`
  font-weight: bold;
`;

export const gapSm = css`
  gap: 10px;
`;

export const gapMd = css`
  gap: 20px;
`;

export const gapLg = css`
  gap: 30px;
`;

export const paddingSm = css`
  padding: 10px;
`;

export const paddingMd = css`
  padding: 20px;
`;

export const paddingLg = css`
  padding: 30px;
`;

export const boxShadow = css`
  box-shadow: 0 0.35em 0.2em -0.05em var(--color-soft),
    0 0 0 0.5px var(--color-light);
`;

export const widthFull = css`
  width: 100%;
`;
