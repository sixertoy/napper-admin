import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// application
import Types from '../../types';
import MenuToggler from './toggler';
import NavigationItem from './item';
import { mapStateToProps } from './connect';

const buildNavigation = items =>
  items && items.map(obj => (obj && <NavigationItem {...obj} />) || null);

class Navigation extends React.PureComponent {
  render() {
    const { routes } = this.props;
    return (
      <div
        id="smartadmin-main-navigation"
        className="is-fixed shadowed flex-rows flex-between no-overflow">
        <nav className="row-bottom flex-rows flex-start">
          <MenuToggler />
          {buildNavigation(routes.main)}
        </nav>
        <nav className="row-bottom flex-rows flex-end">
          {buildNavigation(routes.sub)}
        </nav>
      </div>
    );
  }
}

Navigation.propTypes = {
  routes: Types.RoutesType.isRequired,
};

export default compose(
  withRouter,
  connect(mapStateToProps)
)(Navigation);
