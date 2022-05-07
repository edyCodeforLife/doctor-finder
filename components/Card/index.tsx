// Internal modules
import ICard from '@/interfaces/ICard';
import { card } from '@/components/Card/style';

const Card = (props: ICard): JSX.Element => {
  const { children, css, ...rest } = props;

  return (
    <div css={[card, css]} {...rest}>
      {children}
    </div>
  );
};

export default Card;
