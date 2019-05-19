import React from 'react';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

import Sidebar from '../layout/Sidebar';

const renderRedirect = from => {
  const opts = { pathname: '/login', state: { from } };
  return <Redirect to={opts} />;
};

const renderComponent = route => {
  const { component: Component, name, path } = route;
  return (
    <React.Fragment>
      <Sidebar />
      <Component config={{ name, path }} />
    </React.Fragment>
  );
};

const PrivateRoute = ({ islogged, location, route }) => {
  const exact = route.exact === undefined ? true : route.exact;
  return (
    <Route
      exact={exact}
      path={route.path}
      render={() => {
        if (islogged) return renderComponent(route);
        return renderRedirect(location);
      }}
    />
  );
};

PrivateRoute.propTypes = {
  islogged: PropTypes.bool.isRequired,
  location: PropTypes.object.isRequired,
  route: PropTypes.object.isRequired,
};

const mapStateToProps = ({ islogged }) => ({ islogged });

export default compose(
  withRouter,
  connect(mapStateToProps)
)(PrivateRoute);
