import React from 'react';
import PropTypes from 'prop-types';

import { getAdminElementId } from '../../helpers';

const NavigationToggler = ({ toggle }) => (
  <button
    type="button"
    onClick={toggle}
    className="is-block no-background"
    id={getAdminElementId('nav', 'toggler')}>
    {/* <Icon type={opened ? 'right' : 'left'} /> */}
  </button>
);

NavigationToggler.propTypes = {
  toggle: PropTypes.func.isRequired,
};

export default NavigationToggler;
