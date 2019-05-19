import React from 'react';
import { Select } from 'antd';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';

// application
import TinyError from '../ui/TinyError';
import TinyLoader from '../ui/TinyLoader';

const filterOption = (input, option) => {
  const child = option.props.children;
  return child.toLowerCase().indexOf(input.toLowerCase()) >= 0;
};

const SmartEntitySelector = ({ query, name, label, size, onChange }) => (
  <Query query={query}>
    {({ loading, error, data }) => {
      if (loading) return <TinyLoader />;
      if (error) return <TinyError error={error} />;
      const entities = data[name];
      return (
        <Select
          showSearch
          size={size}
          onChange={onChange}
          placeholder={label}
          className="entityselector"
          optionFilterProp="children"
          filterOption={filterOption}
          dropdownClassName="entityselector-dropdown">
          {entities &&
            entities.map(obj => (
              <Select.Option key={obj.id} value={obj.id}>
                {obj.label}
              </Select.Option>
            ))}
        </Select>
      );
    }}
  </Query>
);

SmartEntitySelector.defaultProps = {
  size: 'default',
};

SmartEntitySelector.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  query: PropTypes.object.isRequired,
  size: PropTypes.string,
};

export default SmartEntitySelector;
