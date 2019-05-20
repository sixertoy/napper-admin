import React from 'react';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { BackTop } from 'antd';
import { Route, Switch, withRouter } from 'react-router-dom';

import Subpage from './subpage';
import PageTitle from './page-title';
import PageSubtitle from './page-subtitle';
// import SidebarControl from './sidebar-control';
import { slugify } from '../../utils/strings';
import { pathnameToKey } from '../../utils/router';

const renderRouterSwitch = views => {
  if (!views || !views.length) return null;
  return (
    <Switch>
      {views.map(obj => {
        // TODO create a proptypes object for routes
        const exact = (obj.exact !== undefined && obj.exact) || true;
        const key = pathnameToKey(obj.path, 'route');
        return (
          <Route
            key={key}
            exact={exact}
            path={obj.path}
            component={obj.component}
          />
        );
      })}
    </Switch>
  );
};

// application
const SmartPage = ({
  children,
  // isCollapsable,
  // isEntityPage,
  links,
  name,
  pageId,
  sidebarClassname,
  subtitle,
  views,
}) => (
  <div id={pageId} className="page">
    {/* <BackTop visibilityHeight={200} /> */}
    <div className="flex-columns flex-between items-center pb12 mb20 bb1">
      <PageTitle text={name} />
      {(links && <Subpage items={links} />) || null}
      {/* {(isCollapsable && <SidebarControl />) || null} */}
    </div>
    {subtitle && <PageSubtitle text={subtitle} />}
    <div
      id="page-columns-container"
      className={`flex-columns flex-between mt20 ${sidebarClassname}`}>
      {!views && children}
      {views && renderRouterSwitch(views)}
    </div>
  </div>
);

SmartPage.defaultProps = {
  children: null,
  links: null,
  subtitle: null,
  views: null,
};

SmartPage.propTypes = {
  children: PropTypes.node,
  // isCollapsable: PropTypes.bool.isRequired,
  // isEntityPage: PropTypes.bool.isRequired,
  links: PropTypes.array,
  name: PropTypes.string.isRequired,
  pageId: PropTypes.string.isRequired,
  sidebarClassname: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  views: PropTypes.array,
};

const mapStateToProps = ({ showSidebar }, { path }) => {
  // const isEntityPage = Boolean(
  //   match.params && Object.keys(match.params).length
  // );
  // const isCollapsable = Boolean(collapsable && !isEntityPage);
  const pageId = `${slugify(path)}-page`;
  const sidebarClassname = (!showSidebar && 'opened') || '';
  return {
    // isCollapsable,
    // isEntityPage,
    pageId,
    showSidebar,
    sidebarClassname,
  };
};

export default compose(
  withRouter,
  connect(mapStateToProps)
)(SmartPage);
