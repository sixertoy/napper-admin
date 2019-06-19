import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import NavigationItemComponent from './NavigationItemComponent';
import { toggleNavigation } from '../../actions';

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
)(NavigationItemComponent);
