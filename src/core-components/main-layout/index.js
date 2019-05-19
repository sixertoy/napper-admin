import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Navigation from '../main-navigation';
import PageHeader from './layout-header';
import PageFooter from './layout-footer';
import DocumentHead from './document-head';
import PagesContainer from './pages-container';
// import GraphqlDebugger from './graphql-debugger';
// import AppBreadcrumbs from './components/AppBreadcrumbs';
import { mapStateToProps } from './connect';

const SmartAdminMainLayout = ({ manifest, routes, className }) => (
  <div
    id="smartadmin-main-layout"
    className={`flex-1 is-full-layout ${className}`}>
    <DocumentHead routes={routes} />
    <div
      id="smartadmin-main-navigation"
      className="is-fixed shadowed flex-rows flex-between no-overflow">
      <Navigation routes={routes} />
    </div>
    <div className="is-full-layout flex-rows flex-between">
      <div
        id="smartadmin-main-header"
        className="flex-0 is-rainbow is-white-text p30">
        <PageHeader manifest={manifest} />
      </div>
      <div id="smartadmin-main-container" className="p20 flex-1">
        <PagesContainer routes={routes} />
      </div>
      {/*
      {Utils.isDevelopment && <GraphqlDebugger />}
    <AppPopin /> */}
      <div
        id="smartadmin-main-footer"
        className="fs12 flex-0 flex-columns flex-between p20 mt60">
        <PageFooter manifest={manifest} />
      </div>
    </div>
  </div>
);

SmartAdminMainLayout.propTypes = {
  className: PropTypes.string.isRequired,
  manifest: PropTypes.object.isRequired,
  routes: PropTypes.object.isRequired,
};

export default compose(
  withRouter,
  connect(mapStateToProps)
)(SmartAdminMainLayout);
