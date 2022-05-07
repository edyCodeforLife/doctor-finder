// Internal modules
import IContainer from '@/interfaces/IContainer';
import { container } from '@/components/Container/style';

const Container = ({ children, css, ...rest }: IContainer): JSX.Element => (
  <div css={[container, css]} {...rest}>
    {children}
  </div>
);

export default Container;
