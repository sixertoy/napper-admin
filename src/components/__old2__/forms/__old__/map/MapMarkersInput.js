import React from 'react';
import { Form } from 'antd';
import PropTypes from 'prop-types';
import { Field } from 'react-final-form';

import MapInput from '../adapters/MapInput';
import renderLabel from '../../renderLabel';

export const MapMarkersInput = ({
  name,
  help,
  type,
  label,
  width,
  height,
  layers,
  markers,
  ...rest
}) => (
  <Form.Item
    {...rest}
    style={{ width }}
    label={renderLabel(label, help)}
    className={`ant-form-item mapmarkers-input ${rest.className || ''}`}>
    <Field
      name={name}
      render={({ input }) => (
        <MapInput
          {...rest}
          showRulers
          type={type}
          layers={layers}
          markers={markers}
          onClick={input.onChange}
          styles={{ height, width }}
        />
      )}
    />
  </Form.Item>
);

MapMarkersInput.defaultProps = {
  height: '400px',
  help: null,
  label: null,
  layers: null,
  markers: null,
  width: '100%',
};

MapMarkersInput.propTypes = {
  height: PropTypes.string,
  help: PropTypes.string,
  label: PropTypes.string,
  layers: PropTypes.array,
  markers: PropTypes.array,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  width: PropTypes.string,
};

export default MapMarkersInput;
