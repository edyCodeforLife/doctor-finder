// External modules
import { CSSObjectWithLabel } from 'react-select';
import { css } from '@emotion/react';

// Internal modules
import { colorDusk, colorSoft } from '@/styles/shared';

export const filter = css`
  :focus,
  :hover {
    #react-select-filter-placeholder {
      ${colorSoft}
    }
  }
  #react-select-filter-placeholder {
    ${colorDusk}
  }
`;

export const base = {
  option: (provided: CSSObjectWithLabel, state: { isSelected: boolean }) => ({
    ...provided,
    backgroundColor: state.isSelected
      ? 'var(--color-light)'
      : 'var(--color-white)',
    '&:active': {
      backgroundColor: state.isSelected
        ? 'var(--color-soft)'
        : 'var(--color-light)',
    },
    color: state.isSelected ? 'var(--color-dusk)' : 'var(--color-dark)',
    fontSize: '.8rem',
  }),
  control: (provided: CSSObjectWithLabel) => ({
    ...provided,
    boxShadow: 'none',
    borderRadius: '10px',
    border: '1px solid var(--color-soft)',
    minWidth: '240px',
    '&:focus': { border: '1px solid var(--color-dusk)' },
    '&:hover': { border: '1px solid var(--color-dusk)' },
  }),
  menu: (provided: CSSObjectWithLabel) => ({
    ...provided,
    borderRadius: '10px',
  }),
};
