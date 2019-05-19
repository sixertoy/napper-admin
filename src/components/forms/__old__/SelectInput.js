import React from 'react';
import PropTypes from 'prop-types';
import { Form, Select } from 'antd';
import { Field } from 'react-final-form';

import renderLabel from '../renderLabel';

const filterOption = (input, option) => {
  const child = option.props.children;
  return child.toLowerCase().indexOf(input.toLowerCase()) >= 0;
};

export const SelectInput = ({ label, help, name, provider, ...rest }) => (
  <Form.Item
    {...rest}
    label={renderLabel(label, help)}
    className={`clearfix select-input ${rest.className || ''}`}>
    <Field
      name={name}
      render={({ input }) => (
        <Select
          showSearch
          size="default"
          onChange={input.onChange}
          optionFilterProp="children"
          disabled={!provider.length}
          filterOption={filterOption}>
          {provider &&
            provider.map(obj => (
              <Select.Option key={obj.id} value={obj.id}>
                {obj.label}
              </Select.Option>
            ))}
        </Select>
      )}
    />
  </Form.Item>
);

SelectInput.defaultProps = {
  help: null,
  label: null,
};

SelectInput.propTypes = {
  help: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  provider: PropTypes.array.isRequired,
};

export default SelectInput;
