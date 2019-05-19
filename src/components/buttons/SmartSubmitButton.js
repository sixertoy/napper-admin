import React from 'react';
import PropTypes from 'prop-types';

import SmartButton from './SmartButton';

const SmartSubmitButton = ({ label, ...rest }) => (
  <SmartButton
    {...rest}
    icon="save"
    type="primary"
    htmlType="submit"
    label={label || 'Enregistrer'}
  />
);

SmartSubmitButton.defaultProps = {
  disabled: false,
  label: null,
  onClick: null,
  size: 'default',
};

SmartSubmitButton.propTypes = {
  disabled: PropTypes.bool,
  label: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.string,
};

export default SmartSubmitButton;
