import React from 'react';
import PropTypes from 'prop-types';
import {
  matchPath,
  withRouter,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import PageHeader from './PageHeader';
import PageFooter from './PageFooter';
import DocumentHead from './DocumentHead';
import Navigation from './Navigation';
import SmartLayoutPage from './SmartLayoutPage';
// import GraphqlDebugger from './graphql-debugger';
// import AppBreadcrumbs from './components/AppBreadcrumbs';
import { getAdminElementId } from '../../helpers';
import { ManifestType } from '../types';
import { getRouteItemUniqKey } from './utils';

const mergeRoutesToPages = routes => [
  ...(routes.main.map(o => ({ ...o, auth: false, key: o.path })) || []),
  ...(routes.auth.map(o => ({ ...o, auth: true, key: o.path })) || []),
];

const markCurrentPageAsActive = (routes, currentpath) => {
  return routes.map(obj => {
    const matchOptions = { path: obj.path };
    const matchingPath = matchPath(currentpath, matchOptions);
    if (!matchingPath) return obj;
    return { ...obj, isActive: true };
  });
};

export const buildLayoutPage = (route, index) => {
  const { component, path, ...rest } = route;
  const Page = component || SmartLayoutPage;
  const key = getRouteItemUniqKey('route', path, index);
  const componentProps = { ...rest, path };
  return (
    <Route
      exact
      key={key}
      path={path}
      render={routeProps => <Page {...routeProps} {...componentProps} />}
    />
  );
};

// NOTE renommer en factory
const SmartLayout = ({ classname, location, manifest, routes }) => {
  const currentPath = location.pathname;
  let pages = mergeRoutesToPages(routes);
  pages = markCurrentPageAsActive(pages, currentPath);
  // const classname = getClassnameStates(popin, minimized);
  return (
    <div id={getAdminElementId('layout')} className={classname}>
      <DocumentHead pages={pages} />
      <div className="is-fixed shadowed flex-rows flex-between no-overflow">
        <Navigation pages={pages} />
      </div>
      <div className="is-full-layout flex-rows flex-between">
        <PageHeader manifest={manifest} />
        <main className="p20 flex-1">
          <Switch>
            {pages.map(buildLayoutPage)}
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
};

SmartLayout.defaultProps = {
  classname: '',
};

SmartLayout.propTypes = {
  classname: PropTypes.string,
  location: PropTypes.object.isRequired,
  manifest: ManifestType.isRequired,
  routes: PropTypes.object.isRequired,
};

export default withRouter(SmartLayout);
