import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

const BackButton = ({ history }) => (
  <button type="button" className="fs18 mr12" onClick={history.goBack}>
    <i className="icon icon-arrow-left-big" />
  </button>
);

BackButton.propTypes = {
  history: PropTypes.object.isRequired,
};

export default withRouter(BackButton);
