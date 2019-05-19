import React from 'react';
import PropTypes from 'prop-types';

import { SmartIcon } from '../ui';

const CloseButton = ({ onClose }) => (
  <div className="popin-controls">
    <button type="button" className="br50" onClick={onClose}>
      <SmartIcon type="close" />
    </button>
  </div>
);

CloseButton.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default CloseButton;
