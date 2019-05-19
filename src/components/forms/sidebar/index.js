import React from 'react';
import PropTypes from 'prop-types';

import FormSidebarControls from './footer';
import FormSidebarInfos from './infos';

const FormSidebar = ({
  children,
  disabled,
  item,
  // readonly,
  onReset,
  className,
}) => {
  const classname = `smartadmin-formsidebar ${className}`;
  return (
    <div className={classname}>
      {children && (
        <div className="smartadmin-formsidebar-inner">{children}</div>
      )}
      <FormSidebarControls disabled={disabled} reset={onReset} />
      {item && <FormSidebarInfos item={item} className="mb20" />}
    </div>
  );
};

FormSidebar.defaultProps = {
  children: null,
  className: '',
  disabled: false,
  item: null,
  // readonly: false,
};

FormSidebar.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  item: PropTypes.object,
  onReset: PropTypes.func.isRequired,
  // readonly: PropTypes.bool,
};

export default FormSidebar;
