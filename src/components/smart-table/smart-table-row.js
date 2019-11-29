import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';

import { SmartTableColType } from '../types';
import {
  resolveLinkDestination,
  resolveColClassname,
  resolveColValue,
} from './utils';

const renderValueAsIcon = colvalue => {
  const type = (colvalue && 'check') || 'close';
  return type;
};

const renderActionsButton = (id, baseurl) => (
  <td key={`tbody::tr::${id}::actions`}>
    <Link to={`/${baseurl}/edit`} className="">
      <i className="icon icon-edit" />
      <span>Edit</span>
    </Link>
    <Link to={`/${baseurl}/delete`} className="">
      <i className="icon icon-delete" />
      <span>Delete</span>
    </Link>
  </td>
);

const SmartTableRow = ({ cols, data, history }) => {
  const { location } = history;

  const primaryKey = cols.find(obj => obj.primary).key;
  const itemid = data[primaryKey];

  const baseurl = resolveLinkDestination(location, itemid);
  return (
    <tr data-id={itemid}>
      {cols &&
        cols.map(col => {
          const useicon = col.type === 'bool';
          const colvalue = resolveColValue(data, col);
          const classname = resolveColClassname(col);
          return (
            <td
              key={`tbody::tr::${itemid}::td::${col.key}`}
              className={classname}>
              <Link to={`${baseurl}/edit`} className="">
                {useicon && renderValueAsIcon(colvalue)}
                {!useicon && <span>{colvalue}</span>}
              </Link>
            </td>
          );
        })}
      {renderActionsButton(itemid, baseurl)}
    </tr>
  );
};

SmartTableRow.propTypes = {
  cols: SmartTableColType.isRequired,
  data: PropTypes.shape().isRequired,
  history: PropTypes.shape().isRequired,
};

export default withRouter(SmartTableRow);
