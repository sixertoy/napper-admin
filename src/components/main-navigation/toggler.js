import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { toggleNavigation } from '../../actions';

const MenuToggler = ({ toggle }) => (
  <button
    type="button"
    className="toggler is-block no-background"
    onClick={toggle}>
    {/* <Icon type={opened ? 'right' : 'left'} /> */}
  </button>
);

MenuToggler.propTypes = {
  toggle: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  toggle: () => dispatch(toggleNavigation()),
});

export default connect(
  null,
  mapDispatchToProps
)(MenuToggler);
