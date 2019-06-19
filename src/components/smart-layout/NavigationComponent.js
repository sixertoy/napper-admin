import React from 'react';
import PropTypes from 'prop-types';

// application
// import { RoutesType } from '../types';
import NavigationItem from './NavigationItem';
import NavigationToggler from './NavigationToggler';
import { getAdminElementId } from '../../helpers';

const buildNavigation = items =>
  items && items.map(obj => <NavigationItem {...obj} />);

const toggleNavigation = () => {
  console.log('TODO pass a function to toggle navigation');
};

const Navigation = ({ adminpages, mainpages }) => (
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

Navigation.propTypes = {
  adminpages: PropTypes.array.isRequired,
  mainpages: PropTypes.array.isRequired,
};

export default Navigation;
