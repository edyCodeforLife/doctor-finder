// External modules
import { jsx } from '@emotion/react';

// Internal modules
import IHeading from '@/interfaces/IHeading';
import { heading } from '@/components/Heading/style';

const Heading = ({ children, level, css, ...rest }: IHeading): JSX.Element => {
  // Set level from h1 to h6
  // If level is not valid, fallback to h2
  const tag = `h${level < 7 ? level : 2}`;

  // Create dynamic heading
  const Element = jsx(tag, { css: [heading, css], ...rest }, children);

  return Element;
};

export default Heading;
