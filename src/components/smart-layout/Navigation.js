import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import NavigationComponent from './NavigationComponent';
import { getRouteItemUniqKey } from './utils';

const parseNavigationItems = (items, filterAdminPages = false) =>
  items &&
  items
    .filter(obj => obj.icon)
    .filter(obj => obj.auth === filterAdminPages)
    .map(obj => {
      const key = getRouteItemUniqKey('smart-admin::navigation', obj.path);
      return { ...obj, key };
    });

export const mapStateToProps = (state, { pages }) => {
  const mainpages = parseNavigationItems(pages) || [];
  const adminpages = parseNavigationItems(pages, true) || [];
  return {
    adminpages,
    mainpages,
    // minimized,
    // path,
  };
};

export default compose(
  withRouter,
  connect(mapStateToProps)
)(NavigationComponent);
