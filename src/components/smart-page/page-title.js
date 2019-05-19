import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import SmartButtonBack from '../buttons/SmartButtonBack';

const PageTitle = ({ text, match }) => {
  const { params } = match;
  const canBack = params && params.id;
  return (
    <h2 id="smartadmin-page-title" className="is-bold">
      {(canBack && <SmartButtonBack />) || null}
      <span>{text}</span>
    </h2>
  );
};

PageTitle.propTypes = {
  match: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
};

export default withRouter(PageTitle);
