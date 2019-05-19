import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// application
import MenuToggler from './toggler';
import NavigationItem from './item';
import { mapStateToProps } from './connect';

const buildNavigation = items => items.map(obj => <NavigationItem {...obj} />);

class Navigation extends React.PureComponent {
  render() {
    const { items } = this.props;
    return (
      <div
        id="smartadmin-main-navigation"
        className="is-fixed shadowed flex-rows flex-between no-overflow">
        <nav className="row-bottom flex-rows flex-start">
          <MenuToggler />
          {buildNavigation(items.main)}
        </nav>
        <nav className="row-bottom flex-rows flex-end">
          {buildNavigation(items.sub)}
        </nav>
      </div>
    );
  }
}

Navigation.propTypes = {
  items: PropTypes.object.isRequired,
};

export default compose(
  withRouter,
  connect(mapStateToProps)
)(Navigation);
