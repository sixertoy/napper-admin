import React from 'react';
import PropTypes from 'prop-types';

const SmartPageSubtitle = ({ text }) => (
  <h6 className="mt20">
    <span className="is-bold">{text}</span>
  </h6>
);

SmartPageSubtitle.propTypes = {
  text: PropTypes.string.isRequired,
};

export default SmartPageSubtitle;
