import React from 'react';

import { ManifestType } from '../types';

const PageFooter = ({ manifest }) => (
  <div className="fs12 flex-0 flex-columns flex-between p20 mt60">
    <div className="lh16">
      <span>{manifest.copyright}</span>
    </div>
    <div className="lh16">
      <span>{`v${manifest.version}`}</span>
    </div>
  </div>
);

PageFooter.propTypes = {
  manifest: ManifestType.isRequired,
};

export default PageFooter;
