// Internal modules
import IList from '@/interfaces/IList';
import { list } from '@/components/List/style';

const List = (props: IList): JSX.Element => {
  const { children, css, ...rest } = props;

  return (
    <ul css={[list, css]} {...rest}>
      {children}
    </ul>
  );
};

export default List;
