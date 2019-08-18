import React, { memo, useCallback } from 'react';
import PropTypes from 'prop-types';
import { AutoComplete } from 'antd';

const FilterLangs = memo(({ onChange, defaultSelection, options }) => {
  const onChangeHandler = useCallback(
    value => {
      if (options.includes(value)) {
        onChange(value);
      }
    },
    [onChange, options],
  );

  return (
    <AutoComplete
      dataSource={options}
      defaultValue={defaultSelection}
      onChange={onChangeHandler}
      placeholder="Select a language"
    />
  );
});

FilterLangs.displayName = 'FilterLangs';

FilterLangs.propTypes = {
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  defaultSelection: PropTypes.string,
};

FilterLangs.defaultProps = {
  defaultSelection: undefined,
};

export default FilterLangs;
