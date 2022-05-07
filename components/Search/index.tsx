// Internal modules
import ISearch from '@/interfaces/ISearch';
import { search } from '@/components/Search/style';

const Search = (props: ISearch): JSX.Element => {
  const { placeholder, onChange, value, css, ...rest } = props;

  return (
    <input
      type="search"
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      css={[search, css]}
      {...rest}
    />
  );
};

export default Search;
