// External modules
import { SerializedStyles } from '@emotion/react';
import { SetStateAction } from 'react';

interface ISearch {
  placeholder?: string;
  onChange: (event: { target: { value: SetStateAction<string> } }) => void;
  value: string | number;
  css?: SerializedStyles;
}

export default ISearch;
