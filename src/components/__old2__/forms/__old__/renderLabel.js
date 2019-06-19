import React from 'react';
import { Icon, Tooltip } from 'antd';

const renderLabel = (label = '', description = null) =>
  (description && (
    <span>
      <b>{label || ''}</b>
      <Tooltip overlayClassName="ant-tooltip-note" title={description}>
        <Icon className="ml7" type="question-circle-o" />
      </Tooltip>
    </span>
  )) ||
  label;

export default renderLabel;
