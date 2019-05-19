import React from 'react';
import PropTypes from 'prop-types';

import { ColObject } from './types';
import { KEY_PREFIX } from './constants';

const SmartTableColGroup = ({ cols }) => (
  <colgroup>
    {cols &&
      cols.map(col => {
        const key = `${KEY_PREFIX}::colgroup::col::${col.key}`;
        return <col key={key} />;
      })}
    <col
      key={`${KEY_PREFIX}::colgroup::col::actions`}
      className="text-center"
    />
  </colgroup>
);

SmartTableColGroup.defaultProps = {};

SmartTableColGroup.propTypes = {
  cols: PropTypes.arrayOf(ColObject).isRequired,
};

export default SmartTableColGroup;
