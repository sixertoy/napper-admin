import React from 'react';
// import { compose } from 'redux';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { BackTop } from 'antd';
import { Route, Switch } from 'react-router-dom';

// import LinkedPages from './subpage';
import PageTitle from './page/title';
import PageSubtitle from './page/subtitle';
// import SidebarControl from './sidebar-control';
// import { slugify } from '../../utils/strings';
// import { pathnameToKey } from '../../utils/router';

const renderRouterSwitch = views => {
  if (!views || !views.length) return null;
  return (
    <Switch>
      {views.map(obj => {
        const { component, path } = obj;
        const isvalid = component && path;
        if (!isvalid) {
          // TODO add logger message if missing component
          return null;
        }
        const exact = (obj.exact !== undefined && obj.exact) || true;
        const routeprops = { exact, path };

        const isfunction = typeof component === 'function';
        const hasprototype = !!component.prototype;
        if (isfunction && !hasprototype) {
          routeprops.render = component;
        } else {
          routeprops.component = component;
        }
        // const key = pathnameToKey(path, 'route');
        return <Route {...routeprops} key={path} />;
      })}
    </Switch>
  );
};

// application
const SmartPageComponent = ({
  children,
  // isCollapsable,
  // isEntityPage,
  // links,
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
      {/* {(links && <LinkedPages items={links} />) || null} */}
      {/* {(isCollapsable && <SidebarControl />) || null} */}
    </div>
    {subtitle && <PageSubtitle text={subtitle} />}
    <div className={`flex-columns flex-between mt20 ${sidebarClassname}`}>
      {!views && children}
      {views && renderRouterSwitch(views)}
    </div>
  </div>
);

SmartPageComponent.defaultProps = {
  children: null,
  // links: null,
  subtitle: null,
  views: null,
};

SmartPageComponent.propTypes = {
  children: PropTypes.node,
  // isCollapsable: PropTypes.bool.isRequired,
  // isEntityPage: PropTypes.bool.isRequired,
  // links: PropTypes.array,
  name: PropTypes.string.isRequired,
  pageId: PropTypes.string.isRequired,
  sidebarClassname: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  views: PropTypes.arrayOf(
    // TODO create a proptypes object for routes
    PropTypes.shape({
      component: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
      exact: PropTypes.bool,
      path: PropTypes.string.isRequired,
    })
  ),
};

export default SmartPageComponent;
