import { compose } from 'redux';
import { connect } from 'react-redux';
import { matchPath, withRouter } from 'react-router-dom';

import SmartLayoutComponent from './SmartLayoutComponent';
import { getClassnameStates } from './utils';

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

export const mapStateToProps = (
  { popin, showNavigation: minimized },
  { location, routes }
) => {
  const currentPath = location.pathname;
  let pages = mergeRoutesToPages(routes);
  pages = markCurrentPageAsActive(pages, currentPath);
  const className = getClassnameStates(popin, minimized);
  return { className, pages };
};

export default compose(
  withRouter,
  connect(mapStateToProps)
)(SmartLayoutComponent);
