import React from 'react';
import PropTypes from 'prop-types';
import { CustomPicker } from 'react-color';
import {
  Hue,
  Saturation,
  EditableInput,
} from 'react-color/lib/components/common';

const noop = () => {};

const CustomColorPicker = ({ hsl, hsv, hex, onChange, onClose }) => (
  <div className="colorinput-picker">
    <div
      role="button"
      tabIndex={-1}
      onClick={onClose}
      onKeyPress={noop}
      className="colorinput-picker-overlay"
    />
    <div className="colorinput-picker-inner">
      <div className="colorinput-picker-editable">
        <EditableInput value={hex} onChange={onChange} />
      </div>
      <div className="colorinput-picker-hue">
        <Hue hsl={hsl} onChange={onChange} direction="horizontal" />
      </div>
      <div className="colorinput-picker-saturation">
        <Saturation hsl={hsl} hsv={hsv} onChange={onChange} />
      </div>
    </div>
  </div>
);

CustomColorPicker.defaultProps = {
  hex: null,
  hsl: null,
  hsv: null,
};

CustomColorPicker.propTypes = {
  hex: PropTypes.string,
  hsl: PropTypes.object,
  hsv: PropTypes.object,
  onChange: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default CustomPicker(CustomColorPicker);
