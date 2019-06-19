import React from 'react';
import { Form } from 'antd';
import PropTypes from 'prop-types';
import { Field } from 'react-final-form';

import MapInput from '../adapters/MapInput';
import renderLabel from '../../renderLabel';

const formatValue = value => value;
const parseValue = (value, type) => type && value && value[type];

export const MapPropsInput = ({
  name,
  help,
  type,
  label,
  width,
  height,
  layers,
  format,
  ...rest
}) => (
  <Form.Item
    {...rest}
    style={{ width }}
    label={renderLabel(label, help)}
    className={`ant-form-item mapprops-input ${rest.className || ''}`}>
    <Field
      name={name}
      format={format}
      render={({ input }) => {
        const mapprops = { [type]: input.value };
        return (
          <MapInput
            {...rest}
            {...mapprops}
            showRulers
            type={type}
            layers={layers}
            styles={{ height, width }}
            onChange={input.onChange}
          />
        );
      }}
    />
  </Form.Item>
);

MapPropsInput.defaultProps = {
  format: formatValue,
  height: '400px',
  help: null,
  label: null,
  parse: parseValue,
  width: '100%',
};

MapPropsInput.propTypes = {
  format: PropTypes.func,
  height: PropTypes.string,
  help: PropTypes.string,
  label: PropTypes.string,
  layers: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  parse: PropTypes.func,
  type: PropTypes.string.isRequired,
  width: PropTypes.string,
};

export default MapPropsInput;
