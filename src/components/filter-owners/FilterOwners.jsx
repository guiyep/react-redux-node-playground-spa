import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd';

const FilterOwners = memo(({ onChange, value }) => {
  return <Input placeholder="Filter owners..." defaultValue={value} onChange={onChange} />;
});

FilterOwners.displayName = 'FilterOwners';

FilterOwners.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
};

FilterOwners.defaultProps = {
  value: undefined,
};

export default FilterOwners;
