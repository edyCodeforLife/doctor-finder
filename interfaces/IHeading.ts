// External modules
import { SerializedStyles } from '@emotion/react';

interface IHeading {
  children: React.ReactNode;
  level: number;
  css?: SerializedStyles;
}

export default IHeading;
