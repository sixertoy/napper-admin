import React from 'react';
import PropTypes from 'prop-types';

// application
// import { RoutesType } from '../types';
import NavigationItem from './NavigationItem';
import NavigationToggler from './NavigationToggler';
import { getRouteItemUniqKey } from './utils';
import { getAdminElementId } from '../../helpers';

const buildNavigation = items =>
  items && items.map(obj => <NavigationItem {...obj} />);

const toggleNavigation = () => {
  // eslint-disable-next-line no-console
  console.log('TODO pass a function to toggle navigation');
};

const parseNavigationItems = (items, filterAdminPages = false) =>
  items &&
  items
    .filter(obj => obj.icon)
    .filter(obj => obj.auth === filterAdminPages)
    .map(obj => {
      const key = getRouteItemUniqKey('smart-admin::navigation', obj.path);
      return { ...obj, key };
    });

const Navigation = ({ pages }) => {
  const mainpages = parseNavigationItems(pages) || [];
  const adminpages = parseNavigationItems(pages, true) || [];
  return (
    <div id={getAdminElementId('navigation')}>
      <nav className={getAdminElementId('nav')}>
        <NavigationToggler toggle={toggleNavigation} />
        {buildNavigation(mainpages)}
      </nav>
      <nav className={getAdminElementId('nav')}>
        {buildNavigation(adminpages)}
      </nav>
    </div>
  );
};

Navigation.propTypes = {
  pages: PropTypes.array.isRequired,
};

export default Navigation;
