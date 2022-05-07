// Internal modules
import { LG, MD, SM, XL, XS } from '@/constants/breakpoints';
import IBreakpoints from '@/interfaces/IBreakpoints';

const breakpoints: IBreakpoints = {
  xl: XL,
  lg: LG,
  md: MD,
  sm: SM,
};

// Iterate through the sizes and create a media template
const media = Object.keys(breakpoints).reduce((accumulator, label) => {
  const emSize = breakpoints[label] / 16;
  accumulator[label] = `@media (min-width: ${emSize}em)`;

  return accumulator;
}, {} as Record<string, string>);

// Special breakpoint for very small device
media.xs = `@media (max-width: ${XS / 16}em)`;

export default media;
