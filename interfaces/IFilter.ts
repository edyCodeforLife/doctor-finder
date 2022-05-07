// External modules
import { SerializedStyles } from '@emotion/react';

export interface IOption {
  value: string | number;
  label: string;
}

interface IFilter {
  options: IOption[];
  placeholder?: string;
  onChange: any;
  value: IOption[];
  css?: SerializedStyles;
}

export default IFilter;
