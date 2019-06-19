import React from 'react';
import PropTypes from 'prop-types';

// application
// import { RoutesType } from '../types';
import NavigationItemContainer from './NavigationItemContainer';
import NavigationTogglerContainer from './NavigationTogglerContainer';

const buildNavigation = items =>
  items && items.map(o => <NavigationItemContainer {...o} />);

const toggleNavigation = () => {
  console.log('TODO pass a function to toggle navigation');
};

const Navigation = ({ adminpages, mainpages }) => (
  <div className="is-fixed shadowed flex-rows flex-between no-overflow">
    <nav className="row-bottom flex-rows flex-start">
      <NavigationTogglerContainer toggle={toggleNavigation} />
      {buildNavigation(mainpages)}
    </nav>
    <nav className="row-bottom flex-rows flex-end">
      {buildNavigation(adminpages)}
    </nav>
  </div>
);

Navigation.propTypes = {
  adminpages: PropTypes.array.isRequired,
  mainpages: PropTypes.array.isRequired,
};

export default Navigation;
