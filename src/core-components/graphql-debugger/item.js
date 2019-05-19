import React from 'react';
import PropTypes from 'prop-types';

import { unsafeArrayKeyIndex } from '../../../utils';

const GraphqlDebuggerItem = ({ item }) => {
  const date = new Date(item.time);
  return (
    <li key={item.time} className="item">
      <small>{date.toLocaleString()}</small>
      {item.error.map((err, index) => {
        const key = unsafeArrayKeyIndex(item.time, index);
        return <b key={key}>{`> ${err}`}</b>;
      })}
    </li>
  );
};

GraphqlDebuggerItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default GraphqlDebuggerItem;
