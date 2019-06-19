import React from 'react';
import PropTypes from 'prop-types';

const Legend = ({ label }) => (
  <legend>
    <span>
      <span>{label}</span>
    </span>
  </legend>
);

Legend.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Legend;
