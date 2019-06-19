import React from 'react';

import { ManifestType } from '../types';
import { getAdminElementId } from '../../helpers';

const PageHeader = ({ manifest }) => (
  <header id={getAdminElementId('header')}>
    <h1 className="title is-uppercase is-white-text">
      <span>{manifest.name}</span>
    </h1>
    <h6 className="subtitle is-uppercase py3 px12">
      <small>{manifest.description}</small>
    </h6>
    <div className="user align-right" />
  </header>
);

PageHeader.defaultProps = {};

PageHeader.propTypes = {
  manifest: ManifestType.isRequired,
};

export default PageHeader;
