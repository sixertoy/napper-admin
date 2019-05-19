/* eslint
  react/jsx-one-expression-per-line: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'react-final-form';

import FormError from '../FormError';
import InputLabel from '../InputLabel';
// import { validateRequiredField } from '../validators';

const TextInput = ({
  autoComplete,
  className,
  disabled,
  label,
  name,
  placeholder,
  required,
}) => (
  // const validateFunc =
  //   required && typeof required === 'function'
  //     ? required
  //     : (required && validateRequiredField) || undefined;
  <Field
    name={name}
    // validate={validateFunc || undefined}
    render={({ input, meta }) => (
      <div className={`smartadmin-final-form-field ${className}`}>
        <label htmlFor={name} className="smartadmin-final-form-textinput">
          {label && <InputLabel label={label} required={required} />}
          <span className="smartadmin-final-form-inner">
            <input
              {...input}
              id={name}
              type="text"
              disabled={disabled}
              required={!!required}
              placeholder={placeholder}
              autoComplete={autoComplete ? 'on' : 'off'}
            />
          </span>
          <FormError meta={meta} />
        </label>
      </div>
    )}
  />
);

TextInput.defaultProps = {
  autoComplete: false,
  className: '',
  disabled: false,
  label: '',
  placeholder: 'Veuillez saisir une valeur',
  required: false,
};

TextInput.propTypes = {
  autoComplete: PropTypes.bool,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
};

export default TextInput;
