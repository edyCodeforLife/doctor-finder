// External modules
import Select, {
  GroupBase,
  MultiValueProps,
  OptionProps,
  ValueContainerProps,
  components,
} from 'react-select';

// Internal module
import IFilter, { IOption } from '@/interfaces/IFilter';
import { base, filter } from '@/components/Filter/style';

// Create Option component
const Option = (
  props: OptionProps<IOption, true, GroupBase<IOption>>
): JSX.Element => (
  <components.Option {...props}>
    <input type="checkbox" checked={props.isSelected} onChange={() => null} />{' '}
    <label>{props.label}</label>
  </components.Option>
);

// Create ValueContainer component
const ValueContainer = ({
  children,
  ...props
}: ValueContainerProps<IOption, true, GroupBase<IOption>>): JSX.Element => {
  const currentValues = props.getValue();
  const selected = currentValues.length;

  let toBeRendered = children;
  if (selected > 0) toBeRendered = `${selected} selected`;

  return (
    <components.ValueContainer {...props}>
      {toBeRendered}
    </components.ValueContainer>
  );
};

// Create MultiValue component
const MultiValue = (
  props: MultiValueProps<IOption, true, GroupBase<IOption>>
): JSX.Element => (
  <components.MultiValue {...props}>{props.data.label}</components.MultiValue>
);

const Filter = (props: IFilter): JSX.Element => {
  const { options, placeholder, onChange, value, css, ...rest } = props;

  return (
    <div>
      <Select
        instanceId="filter"
        components={{ Option, MultiValue, ValueContainer }}
        options={options}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        isMulti
        closeMenuOnSelect={false}
        hideSelectedOptions={false}
        backspaceRemovesValue={false}
        controlShouldRenderValue={false}
        css={[filter, css]}
        styles={base}
        {...rest}
      />
    </div>
  );
};

export default Filter;
