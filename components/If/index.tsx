// Internal modules
import IIf from '@/interfaces/IIf';

const If = ({ children, condition }: IIf): null | JSX.Element => {
  if (!condition) return null;

  // Render children if condition is truthy
  return children;
};

export default If;
