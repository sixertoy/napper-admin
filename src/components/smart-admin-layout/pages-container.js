import React from 'react';
// import { connect } from 'react-redux';
import { Redirect, Switch } from 'react-router-dom';

import Types from '../../types';
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
  routes: Types.RoutesType.isRequired,
};

export default SmartLayoutPagesContainer;
