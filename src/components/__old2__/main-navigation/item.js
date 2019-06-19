import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';

import { toggleNavigation } from '../../actions';

const parseDestination = path => {
  const rootpath = `/${path.split('/').slice(1, 2)}`;
  return rootpath;
};

const NavigationItem = ({ icon, minimized, name, path, toggle }) => (
  <NavLink
    exact={false}
    to={parseDestination(path)}
    onClick={() => toggle(minimized)}
    activeClassName="active disabled"
    className="link is-block no-overflow">
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

const mapStateToProps = ({ showNavigation: minimized }) => ({
  minimized,
});

const mapDispatchToProps = dispatch => ({
  toggle: minimized => {
    if (minimized) return;
    dispatch(toggleNavigation());
  },
});

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(NavigationItem);
