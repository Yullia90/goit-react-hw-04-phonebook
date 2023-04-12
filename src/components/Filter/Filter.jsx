import PropTypes from 'prop-types';
import { FilterForm, Input } from './Filter.styled';
export const Filter = ({ value, onFilter }) => {
  return (
    <FilterForm>
      <Input
        name="filter"
        type="text"
        placeholder="Enter name"
        value={value}
        onChange={onFilter}
      ></Input>
    </FilterForm>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
};
