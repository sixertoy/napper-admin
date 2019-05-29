import React from 'react';

import Types from '../../types';

const LayoutFooter = ({ manifest }) => (
  <React.Fragment>
    <div className="lh16">
      <span>{manifest.copyright}</span>
    </div>
    <div className="lh16">
      <span>{`v${manifest.version}`}</span>
    </div>
  </React.Fragment>
);

LayoutFooter.propTypes = {
  manifest: Types.ManifestType.isRequired,
};

export default LayoutFooter;
