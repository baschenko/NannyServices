import css from './Filter.module.css';
// import { useDispatch } from 'react-redux';
// import { changeFilter } from '../../redux/filter/filtersSlice.js';
import { useState } from 'react';
import Select from 'react-select';

const Filter = () => {
  // const dispatch = useDispatch();

  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { value: 'AtoZ', label: 'A to Z' },
    { value: 'ZtoA', label: 'Z to A' },
    { value: 'LessThan10', label: 'Less than 10$' },
    { value: 'GreaterThan10', label: 'Greater than 10$' },
    { value: 'Popular', label: 'Popular' },
    { value: 'NotPopular', label: 'Not popular' },
    { value: 'ShowAll', label: 'Show all' },
  ];

  const handleChange = selectedOption => {
    setSelectedOption(selectedOption);
  };

  // const handleSubmit = values => {
  //   dispatch(changeFilter(values));
  // };

  return (
    <label className={css.label}>
      Filters
      <Select
        value={selectedOption}
        onChange={handleChange}
        options={options}
        className={css.reactSelect}
        classNamePrefix={css.reactSelect}
        // classNames={css.reactSelectControl}
        components={{
          IndicatorSeparator: () => null, // Убираем разделитель
        }}
        placeholder="A to Z"
        styles={{
          option: (baseStyles, state) => ({
            ...baseStyles,
            // background: 'none',
            color: state.isFocused ? '#11101c' : 'rgba(17, 16, 28, 0.3)',
          }),
        }}
      />
    </label>
  );
};

export default Filter;
