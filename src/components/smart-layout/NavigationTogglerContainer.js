import { connect } from 'react-redux';

import NavigationToggler from './NavigationToggler';
import { toggleNavigation } from '../actions';

const mapDispatchToProps = dispatch => ({
  toggle: () => dispatch(toggleNavigation()),
});

export default connect(
  null,
  mapDispatchToProps
)(NavigationToggler);
