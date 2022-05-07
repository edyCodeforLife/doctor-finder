// External modules
import { css } from '@emotion/react';

// Internal modules
import {
  borderDusk,
  borderRadius,
  borderSoft,
  colorDusk,
  colorSoft,
} from '@/styles/shared';

export const search = css`
  ${borderSoft}
  ${borderRadius}
  outline: none;
  padding: 0 1rem;
  height: 38px;
  font-size: 16px;
  ::placeholder {
    ${colorDusk}
  }
  :focus,
  :hover {
    ${borderDusk}
    ::placeholder {
      ${colorSoft}
    }
  }
`;
