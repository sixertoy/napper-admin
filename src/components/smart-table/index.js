import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@iziges/napper-core';

import SmartTableRow from './smart-table-row';
import { SmartTableColType } from './types';

const styles = () => {};

const SmartTable = ({ cols, provider }) => {
  const count = provider.length;
  return (
    <div>
      <table>
        <caption className="">
          <span>{count} élément(s)</span>
        </caption>
        <colgroup>
          {cols && cols.map(col => <col key={col.key} />)}
          <col key="colgroup::col::actions" className="" />
        </colgroup>
        <thead>
          <tr>
            {cols &&
              cols.map((item, index) => (
                <th key={item.index || index}>
                  <span>{item.label}</span>
                </th>
              ))}
            <th key="thead::th::actions">
              <span>Actions</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {provider &&
            provider.map((data, index) => {
              const primary = cols.find(obj => obj.primary) || cols[0];
              if (!primary) return null;
              const itemid = data[primary.key];
              return (
                <SmartTableRow
                  key={`tbody::tr::${itemid}`}
                  data={data}
                  cols={cols}
                  index={index}
                />
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

SmartTable.propTypes = {
  cols: SmartTableColType.isRequired,
  provider: PropTypes.array.isRequired,
};

export default withStyles(styles)(SmartTable);
