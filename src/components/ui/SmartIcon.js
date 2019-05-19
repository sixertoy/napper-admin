import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'antd';

const SmartIcon = ({ type }) => <Icon type={type} />;

SmartIcon.propTypes = {
  type: PropTypes.string.isRequired,
};

export default SmartIcon;
