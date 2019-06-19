import React from 'react';

import { ManifestType } from '../types';
import { getAdminElementId } from '../../helpers';

const PageFooter = ({ manifest }) => (
  <footer id={getAdminElementId('footer')}>
    <div className="lh16">
      <span>{manifest.copyright}</span>
    </div>
    <div className="lh16">
      <span>{`v${manifest.version}`}</span>
    </div>
  </footer>
);

PageFooter.propTypes = {
  manifest: ManifestType.isRequired,
};

export default PageFooter;
