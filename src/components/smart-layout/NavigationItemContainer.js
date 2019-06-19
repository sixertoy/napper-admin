import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { toggleNavigation } from '../actions';
import NavigationItem from './NavigationItem';

const mapStateToProps = ({ showNavigation: minimized }) => ({
  minimized,
});

const mapDispatchToProps = dispatch => ({
  toggle: minimized => {
    if (minimized) return;
    dispatch(toggleNavigation());
  },
});

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(NavigationItem);
