import React from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import { Redirect, Switch } from 'react-router-dom';

import { buildSmartPage } from './utils';

const SmartLayoutPagesContainer = ({ routes }) => {
  const items = [...(routes.main || []), ...(routes.sub || [])];
  return (
    <Switch>
      {/* build pages */}
      {items.map(buildSmartPage)}
      <Redirect to="/dashboard" />
    </Switch>
  );
};

SmartLayoutPagesContainer.defaultProps = {};

SmartLayoutPagesContainer.propTypes = {
  routes: PropTypes.object.isRequired,
};

export default SmartLayoutPagesContainer;
