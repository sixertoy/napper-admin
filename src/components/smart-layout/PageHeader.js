import React from 'react';

import { ManifestType } from '../types';

const PageHeader = ({ manifest }) => (
  <div className="flex-0 is-rainbow is-white-text p30">
    <h1 className="title is-uppercase is-white-text">
      <span>{manifest.name}</span>
    </h1>
    <h6 className="subtitle is-uppercase py3 px12">
      <small>{manifest.description}</small>
    </h6>
    <div className="user align-right" />
  </div>
);

PageHeader.defaultProps = {};

PageHeader.propTypes = {
  manifest: ManifestType.isRequired,
};

export default PageHeader;
