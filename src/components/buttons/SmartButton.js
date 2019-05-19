import React from 'react';
import PropTypes from 'prop-types';

import { noopnoop } from '../../utils';

const renderIcon = icon => <i className={`icon icon-${icon}`} type={icon} />;

const SmartButton = ({
  children,
  className,
  htmlType,
  icon,
  iconPlacement,
  label,
  onClick,
}) => {
  let cssclass = `${className}`;
  if (icon) {
    cssclass = `smartadmin-button-icon ${cssclass}`;
    cssclass = `smartadmin-button-icon-${iconPlacement} ${cssclass}`;
  }
  return (
    <button
      onClick={onClick}
      type={htmlType || 'button'}
      className={`smartadmin-button ${cssclass}`}>
      {icon && iconPlacement === 'before' && renderIcon(icon)}
      {!children && label && <span>{label}</span>}
      {!label && children}
      {icon && iconPlacement === 'after' && renderIcon(icon)}
    </button>
  );
};

SmartButton.defaultProps = {
  children: null,
  className: '',
  htmlType: null,
  icon: null,
  iconPlacement: 'before',
  label: null,
  onClick: noopnoop,
};

SmartButton.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  htmlType: PropTypes.oneOf(['button', 'submit', 'reset']),
  icon: PropTypes.string,
  iconPlacement: PropTypes.oneOf(['after', 'before']),
  label: PropTypes.string,
  onClick: PropTypes.func,
};

export default SmartButton;
