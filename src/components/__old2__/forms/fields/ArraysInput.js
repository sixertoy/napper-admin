import React from 'react';
import PropTypes from 'prop-types';
import { FieldArray } from 'react-final-form-arrays';

import InputLabel from '../InputLabel';

export const ArraysInput = ({
  // help,
  canupdate,
  className,
  children,
  defaultValue,
  label,
  name,
  required,
}) => (
  <FieldArray name={name}>
    {({ fields }) => {
      const last =
        fields &&
        fields.value &&
        fields.length &&
        fields.value[fields.length - 1];
      // FIXME -> should validate by object's keys
      const cansubmit = last;
      return (
        <div className={`smartadmin-final-form-array-input ${className}`}>
          <label
            htmlFor={name}
            required={required}
            className="smartadmin-final-form-textinput">
            {label && <InputLabel label={label} required={required} />}
            <input id={name} type="hidden" />
            <div className="list">
              {fields.map((fname, index) => (
                <div key={fname} className="item flex-columns">
                  <div className="col-left flex-columns">
                    {children(fname, index)}
                  </div>
                  <div className="col-right">
                    <button type="button" onClick={() => fields.remove(index)}>
                      <i className="icon icon-minus-circled" />
                    </button>
                  </div>
                </div>
              ))}
              <div className="flex-columns">
                <button type="button" onClick={() => fields.push(defaultValue)}>
                  <i className="icon icon-plus-circled" />
                  <span>Ajouter</span>
                </button>
                {canupdate && (
                  <button type="submit" disabled={!cansubmit}>
                    <i className="icon icon-save" />
                    <span>Update</span>
                  </button>
                )}
              </div>
            </div>
          </label>
        </div>
      );
    }}
  </FieldArray>
);

ArraysInput.defaultProps = {
  canupdate: false,
  className: '',
  defaultValue: null,
  // help: null,
  label: null,
  required: null,
  // orderby: null,
};

ArraysInput.propTypes = {
  canupdate: PropTypes.bool,
  children: PropTypes.func.isRequired,
  className: PropTypes.string,
  defaultValue: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  // help: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
};

export default ArraysInput;
