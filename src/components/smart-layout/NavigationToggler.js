import { connect } from 'react-redux';

import NavigationTogglerComponent from './NavigationTogglerComponent';
import { toggleNavigation } from '../../actions';

const mapDispatchToProps = dispatch => ({
  toggle: () => dispatch(toggleNavigation()),
});

export default connect(
  null,
  mapDispatchToProps
)(NavigationTogglerComponent);
