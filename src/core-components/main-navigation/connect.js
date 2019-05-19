import { pathnameToKey } from '../../utils/router';

const parseNavigationItems = items =>
  items
    .filter(obj => obj.icon)
    .map(obj => {
      const key = pathnameToKey('smart-admin::navigation', obj.path);
      return { ...obj, key };
    });

export const mapStateToProps = (
  { showNavigation: minimized },
  { location, routes }
) => {
  const path = location.pathname;
  const subNavigation = parseNavigationItems(routes.sub);
  const mainNavigation = parseNavigationItems(routes.main);
  return {
    items: {
      main: mainNavigation,
      sub: subNavigation,
    },
    minimized,
    path,
  };
};

export default mapStateToProps;
