import React from 'react';

import Types from '../../types';

const LayoutHeader = ({ manifest }) => (
  <React.Fragment>
    <h1 className="title is-uppercase is-white-text">
      <span>{manifest.name}</span>
    </h1>
    <h6 className="subtitle is-uppercase py3 px12">
      <small>{manifest.description}</small>
    </h6>
    <div className="user align-right" />
  </React.Fragment>
);

LayoutHeader.defaultProps = {};

LayoutHeader.propTypes = {
  manifest: Types.ManifestType.isRequired,
};

export default LayoutHeader;
