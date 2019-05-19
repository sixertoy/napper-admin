import React from 'react';
import PropTypes from 'prop-types';

const SmartDatatableCaption = ({ provider }) => {
  const count = provider.length;
  return (
    <caption className="text-left is-italic p12">
      <span>{count} élément(s)</span>
    </caption>
  );
};

SmartDatatableCaption.propTypes = {
  provider: PropTypes.array.isRequired,
};

export default SmartDatatableCaption;
