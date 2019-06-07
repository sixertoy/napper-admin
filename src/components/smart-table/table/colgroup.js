import React from 'react';

import { KEY_PREFIX } from '../utils';
import { SmartTableColType } from '../types';

const SmartTableColGroup = ({ cols }) => (
  <colgroup>
    {cols &&
      cols.map(col => {
        const key = `${KEY_PREFIX}::colgroup::col::${col.key}`;
        return <col key={key} />;
      })}
    <col key={`${KEY_PREFIX}::colgroup::col::actions`} className="" />
  </colgroup>
);

SmartTableColGroup.defaultProps = {};

SmartTableColGroup.propTypes = {
  cols: SmartTableColType.isRequired,
};

export default SmartTableColGroup;
