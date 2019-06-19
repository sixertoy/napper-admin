import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { toggleSidebar } from '../../actions';

const SidebarControl = ({ opened, toggle }) => (
  <div className="collapsable-controls">
    <button type="button" disabled={!opened} onClick={toggle}>
      {/* <Icon type="caret-right" /> */}
    </button>
    <button type="button" disabled={opened} onClick={toggle}>
      {/* <Icon type="caret-left" /> */}
    </button>
  </div>
);

SidebarControl.propTypes = {
  opened: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};

const mapStateToProps = ({ showSidebar: opened }) => ({
  opened,
});

const mapDispatchToProps = dispatch => ({
  toggle: () => dispatch(toggleSidebar()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SidebarControl);
