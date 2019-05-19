import React from 'react';
import PropTypes from 'prop-types';

import { KEY_PREFIX } from './constants';

const SmartTableThead = ({ cols }) => (
  <thead>
    <tr>
      {cols &&
        cols.map((item, index) => {
          let key = item.index || index;
          key = `${KEY_PREFIX}::thead::th::${key}`;
          // let classname = `${item.type || item.key}`;
          // classname = `${classname} ${item.cssclass || ''}`;
          return (
            <th key={key}>
              <span>{item.label}</span>
            </th>
          );
        })}
      <th key={`${KEY_PREFIX}::thead::th::actions`}>
        <span>Actions</span>
      </th>
    </tr>
  </thead>
);

SmartTableThead.defaultProps = {};

SmartTableThead.propTypes = {
  cols: PropTypes.array.isRequired,
};

export default SmartTableThead;
