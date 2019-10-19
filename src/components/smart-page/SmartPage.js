import React from 'react';
// import { compose } from 'redux';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { BackTop } from 'antd';
import { Route, Switch } from 'react-router-dom';

// import LinkedPages from './subpage';
// import PageTitle from './page/title';
// import PageSubtitle from './page/subtitle';
import withSmartLayoutPage from '../smart-layout/withSmartLayoutPage';
// import SidebarControl from './sidebar-control';
// import { slugify } from '../../utils/strings';
// import { pathnameToKey } from '../../utils/router';

const renderRouterSwitch = childs => {
  return (
    <Switch>
      {childs.map(obj => {
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
const SmartLayoutPage = ({
  children,
  // isCollapsable,
  // isEntityPage,
  // links,
  childs,
  name,
  path,
  // showSidebar,
  subtitle,
}) => {
  const pageId = `${path}-page`;
  const hasChilds = childs && childs.length;
  return (
    <React.Fragment>
      {!children && hasChilds && renderRouterSwitch(childs)}
      {!childs && children}
    </React.Fragment>
  );
};

SmartLayoutPage.defaultProps = {
  children: null,
  childs: null,
  // links: null,
  // sidebarClassname: false,
  // showSidebar: false,
  subtitle: null,
};

SmartLayoutPage.propTypes = {
  children: PropTypes.node,
  childs: PropTypes.arrayOf(
    // TODO create a proptypes object for routes
    PropTypes.shape({
      component: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
      exact: PropTypes.bool,
      path: PropTypes.string.isRequired,
    })
  ),
  // isCollapsable: PropTypes.bool.isRequired,
  // isEntityPage: PropTypes.bool.isRequired,
  // links: PropTypes.array,
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  // sidebarClassname: PropTypes.string,
  // showSidebar: PropTypes.bool,
  subtitle: PropTypes.string,
};

export default withSmartLayoutPage(SmartLayoutPage);
