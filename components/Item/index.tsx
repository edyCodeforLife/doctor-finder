// Internal modules
import IItem from '@/interfaces/IItem';

const Item = (props: IItem): JSX.Element => {
  const { children, css, ...rest } = props;

  return (
    <li css={css} {...rest}>
      {children}
    </li>
  );
};

export default Item;
