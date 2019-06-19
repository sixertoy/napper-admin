import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Switch } from 'react-router-dom';

import PageHeader from './PageHeader';
import PageFooter from './PageFooter';
import DocumentHead from './DocumentHead';
import Navigation from './Navigation';
// import GraphqlDebugger from './graphql-debugger';
// import AppBreadcrumbs from './components/AppBreadcrumbs';
import { buildSmartPage } from './utils';
import { getAdminElementId } from '../../helpers';
import { ManifestType } from '../types';

const SmartLayoutComponent = ({ className, manifest, pages }) => (
  <div id={getAdminElementId('layout')} className={className}>
    <DocumentHead pages={pages} />
    <div className="is-fixed shadowed flex-rows flex-between no-overflow">
      <Navigation pages={pages} />
    </div>
    <div className="is-full-layout flex-rows flex-between">
      <PageHeader manifest={manifest} />
      <main className="p20 flex-1">
        <Switch>
          {/* build pages */}
          {pages.map(buildSmartPage)}
          <Redirect to="/" />
        </Switch>
      </main>
      {/*
      {Utils.isDevelopment && <GraphqlDebugger />}
    <AppPopin /> */}
      <PageFooter manifest={manifest} />
    </div>
  </div>
);

SmartLayoutComponent.propTypes = {
  className: PropTypes.string.isRequired,
  manifest: ManifestType.isRequired,
  pages: PropTypes.array.isRequired,
};

export default SmartLayoutComponent;
