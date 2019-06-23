import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import { getAdminElementId } from '../../helpers';

const parseDestination = path => {
  const rootpath = `/${path.split('/').slice(1, 2)}`;
  return rootpath;
};

const NavigationItem = ({ icon, name, path }) => (
  <NavLink
    exact
    to={parseDestination(path)}
    onClick={() => {
      // toggle(minimized)
    }}
    activeClassName="active disabled"
    className={getAdminElementId('nav', 'item')}>
    <i className={`icon icon-${icon} text-center is-inline-block`} />
    <span className="label">{name}</span>
  </NavLink>
);

NavigationItem.defaultProps = {
  // minimized: false,
};

NavigationItem.propTypes = {
  icon: PropTypes.string.isRequired,
  // minimized: PropTypes.bool,
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  // toggle: PropTypes.func.isRequired,
};

export default NavigationItem;
