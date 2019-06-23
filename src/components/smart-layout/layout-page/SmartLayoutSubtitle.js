import React from 'react';
import PropTypes from 'prop-types';

const SmartLayoutSubtitle = ({ text }) => (
  <h6 className="mt20">
    <span className="is-bold">{text}</span>
  </h6>
);

SmartLayoutSubtitle.propTypes = {
  text: PropTypes.string.isRequired,
};

export default SmartLayoutSubtitle;
