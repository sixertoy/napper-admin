import React from 'react';
import lget from 'lodash.get';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { Icon } from 'antd';

import { KEY_PREFIX } from './constants';
import { ColObject } from './types';

const renderValueAsIcon = colvalue => {
  const type = (colvalue && 'check') || 'close';
  return <Icon type={type} />;
};

const renderActionsButton = (id, basedest) => (
  <td key={`${KEY_PREFIX}::tbody::tr${id}::actions`}>
    <Link to={`${basedest}/edit`} className="text-left is-full-width">
      <i className="icon icon-edit" />
    </Link>
    <Link to={`${basedest}/delete`} className="text-left is-full-width">
      <i className="icon icon-delete" />
    </Link>
  </td>
);

const SmartTableRow = ({ cols, data, location }) => {
  const { id: itemid } = data;
  const { pathname } = location;
  const basedest = `${pathname}/${data.id}`;
  return (
    <tr data-id={itemid}>
      {cols &&
        cols.map(col => {
          let colvalue = lget(data, col.key);
          colvalue = !col.validate ? colvalue : col.validate(colvalue);
          const useicon = col.type === 'bool';
          const classname = `${col.classname} ${col.type || col.key}`;
          return (
            <td
              key={`${KEY_PREFIX}::tbody::tr${itemid}::td::${col.key}`}
              className={classname}>
              <Link to={`${basedest}/edit`} className="text-left is-full-width">
                {!useicon && <span>{colvalue}</span>}
                {useicon && renderValueAsIcon(colvalue)}
              </Link>
            </td>
          );
        })}
      {renderActionsButton(itemid, basedest)}
    </tr>
  );
};

SmartTableRow.propTypes = {
  cols: PropTypes.arrayOf(ColObject).isRequired,
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default withRouter(SmartTableRow);
