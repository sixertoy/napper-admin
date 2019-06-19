import React from 'react';
import PropTypes from 'prop-types';
// import { Form, Popover } from 'antd';
import { Field } from 'react-final-form';

import ColorPicker from './picker';
import InputLabel from '../../InputLabel';

class ColorInput extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { showPicker: false };
  }

  onTogglePicker = () => {
    this.setState(prev => ({ showPicker: !prev.showPicker }));
  };

  onPickerChange = input => ({ hex }) => {
    if (!input.onChange) return;
    input.onChange(hex);
  };

  render() {
    const { showPicker } = this.state;
    const { className, defaultValue, label, name, required } = this.props;
    return (
      <Field
        name={name}
        render={({ input }) => {
          const backgroundColor = input.value || defaultValue;
          return (
            <div className={`smartadmin-final-form-field ${className}`}>
              <label
                htmlFor={name}
                className="smartadmin-final-form-colorinput">
                {label && <InputLabel label={label} required={required} />}
                <span className="smartadmin-final-form-inner">
                  <input {...input} id={name} type="hidden" />
                  <button
                    type="button"
                    onClick={this.onTogglePicker}
                    className="flex-columns flex-start items-center align-left p7">
                    <span
                      className="mr7"
                      style={{
                        backgroundColor,
                        height: 12,
                        minHeight: 12,
                        minWidth: 12,
                        width: 12,
                      }}
                    />
                    <span style={{ minWidth: '60px', width: '60px' }}>
                      {backgroundColor}
                    </span>
                  </button>
                </span>
              </label>
              {showPicker && (
                <ColorPicker
                  color={backgroundColor}
                  onClose={this.onTogglePicker}
                  onChange={this.onPickerChange(input)}
                />
              )}
            </div>
          );
        }}
      />
    );
  }
}

ColorInput.defaultProps = {
  className: '',
  defaultValue: '#000000',
  // help: null,
  label: null,
  required: false,
};

ColorInput.propTypes = {
  className: PropTypes.string,
  defaultValue: PropTypes.string,
  // help: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
};

export default ColorInput;
