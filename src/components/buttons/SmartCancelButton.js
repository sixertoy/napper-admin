import React from 'react';
import PropTypes from 'prop-types';

import SmartButton from './SmartButton';

const SmartCancelButton = ({ label, ...rest }) => (
  <SmartButton
    {...rest}
    type="danger"
    htmlType="reset"
    icon="close-circle"
    label={label || 'Annuler'}
  />
);

SmartCancelButton.defaultProps = {
  label: null,
  onClick: null,
  size: 'default',
};

SmartCancelButton.propTypes = {
  disabled: PropTypes.bool.isRequired,
  label: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.string,
};

export default SmartCancelButton;
