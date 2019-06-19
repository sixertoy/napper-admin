import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import { getAdminElementId } from '../../helpers';

const parseDestination = path => {
  const rootpath = `/${path.split('/').slice(1, 2)}`;
  return rootpath;
};

const NavigationItem = ({ icon, minimized, name, path, toggle }) => (
  <NavLink
    exact
    to={parseDestination(path)}
    onClick={() => toggle(minimized)}
    activeClassName="active disabled"
    className={getAdminElementId('nav', 'item')}>
    <i className={`icon icon-${icon} text-center is-inline-block`} />
    <span className="label">{name}</span>
  </NavLink>
);

NavigationItem.propTypes = {
  icon: PropTypes.string.isRequired,
  minimized: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  toggle: PropTypes.func.isRequired,
};

export default NavigationItem;
