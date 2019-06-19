import React from 'react';
import PropTypes from 'prop-types';

const NavigationToggler = ({ toggle }) => (
  <button
    type="button"
    className="toggler is-block no-background"
    onClick={toggle}>
    {/* <Icon type={opened ? 'right' : 'left'} /> */}
  </button>
);

NavigationToggler.propTypes = {
  toggle: PropTypes.func.isRequired,
};

export default NavigationToggler;
