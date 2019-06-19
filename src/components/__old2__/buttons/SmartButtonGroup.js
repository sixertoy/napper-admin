import React from 'react';
import PropTypes from 'prop-types';

const SmartButtonGroup = ({ children, className }) => (
  <div className={`is-button-group ${className}`}>{children}</div>
);

SmartButtonGroup.defaultProps = {
  className: '',
};

SmartButtonGroup.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default SmartButtonGroup;
