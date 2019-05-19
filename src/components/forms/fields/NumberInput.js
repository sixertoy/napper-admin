import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'react-final-form';

import InputLabel from '../InputLabel';

export const NumberInput = ({
  className,
  min,
  max,
  // help,
  name,
  label,
  defaultValue,
  required,
}) => (
  <Field
    name={name}
    render={({ input }) => (
      <div className={`smartadmin-final-form-field ${className}`}>
        <label htmlFor={name} className="smartadmin-final-form-textinput">
          {label && <InputLabel label={label} required={required} />}
          <span className="smartadmin-final-form-inner">
            <input
              {...input}
              min={min}
              max={max}
              type="number"
              value={input.value || defaultValue}
            />
          </span>
        </label>
      </div>
    )}
  />
);

NumberInput.defaultProps = {
  className: '',
  defaultValue: 0,
  // help: null,
  label: null,
  max: Infinity,
  min: -Infinity,
  required: false,
};

NumberInput.propTypes = {
  className: PropTypes.string,
  defaultValue: PropTypes.number,
  // help: PropTypes.string,
  label: PropTypes.string,
  max: PropTypes.number,
  min: PropTypes.number,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
};

export default NumberInput;
