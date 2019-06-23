import React from 'react';
// import PropTypes from 'prop-types';

import { getAdminElementId } from '../../helpers';

const NavigationToggler = () => (
  <button
    type="button"
    onClick={() => {}}
    className="is-block no-background"
    id={getAdminElementId('nav', 'toggler')}>
    {/* <Icon type={opened ? 'right' : 'left'} /> */}
  </button>
);

NavigationToggler.propTypes = {};

export default NavigationToggler;
