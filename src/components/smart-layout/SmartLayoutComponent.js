import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route, Switch } from 'react-router-dom';

import DocumentHead from './DocumentHead';
import NavigationContainer from './NavigationContainer';
import PageHeader from './PageHeader';
import PageFooter from './PageFooter';
import { getRouteItemUniqKey } from './utils';
import { ManifestType } from '../../types';
// import GraphqlDebugger from './graphql-debugger';
// import AppBreadcrumbs from './components/AppBreadcrumbs';

export const buildSmartPage = (route, index) => {
  const { component: SmartPageComponent, path, ...rest } = route;
  const key = getRouteItemUniqKey('route', path, index);
  const props = { config: { ...rest, path }, path };
  return (
    <Route
      exact
      key={key}
      path={path}
      render={() => <SmartPageComponent {...props} />}
    />
  );
};

const SmartLayoutComponent = ({ className, manifest, pages }) => (
  <div className={`flex-1 is-full-layout ${className}`}>
    <DocumentHead pages={pages} />
    <div className="is-fixed shadowed flex-rows flex-between no-overflow">
      <NavigationContainer pages={pages} />
    </div>
    <div className="is-full-layout flex-rows flex-between">
      <PageHeader manifest={manifest} />
      <div className="p20 flex-1">
        <Switch>
          {/* build pages */}
          {pages.map(buildSmartPage)}
          <Redirect to="/" />
        </Switch>
      </div>
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
