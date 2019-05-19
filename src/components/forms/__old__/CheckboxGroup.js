import React from 'react';
import PropTypes from 'prop-types';
import { Form, Checkbox } from 'antd';
import { Field } from 'react-final-form';

import renderLabel from '../renderLabel';

export const CheckboxGroup = ({
  name,
  help,
  label,
  checked,
  provider,
  ...rest
}) => (
  <Form.Item label={renderLabel(label, help)}>
    {provider &&
      provider.map(obj => (
        <Field
          {...rest}
          name={name}
          value={obj.id}
          type="checkbox"
          key={`${name}::${obj.id}`}
          render={({ input }) => (
            <Checkbox
              value={obj.id}
              onChange={input.onChange}
              defaultChecked={checked && checked.indexOf(obj.id) !== -1}>
              {obj.label}
            </Checkbox>
          )}
        />
      ))}
  </Form.Item>
);

CheckboxGroup.defaultProps = {
  checked: null,
  help: null,
  label: null,
};

CheckboxGroup.propTypes = {
  checked: PropTypes.array,
  help: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  provider: PropTypes.array.isRequired,
};

export default CheckboxGroup;
