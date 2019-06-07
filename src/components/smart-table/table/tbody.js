import React from 'react';
import PropTypes from 'prop-types';

import SmartTableRow from './row';
import { KEY_PREFIX } from '../utils';
import { SmartTableColType } from '../types';

class SmartTableTbody extends React.PureComponent {
  render() {
    const { cols, provider } = this.props;
    const primary = (cols.length && cols.find(obj => obj.primary)) || cols[0];
    if (!primary) return null;
    return (
      <tbody>
        {provider &&
          provider.map((data, index) => {
            const itemid = data[primary.key];
            return (
              <SmartTableRow
                key={`${KEY_PREFIX}::tbody::tr::${itemid}`}
                data={data}
                cols={cols}
                index={index}
              />
            );
          })}
      </tbody>
    );
  }
}

SmartTableTbody.defaultProps = {};

SmartTableTbody.propTypes = {
  // actions: PropTypes.object.isRequired,
  cols: SmartTableColType.isRequired,
  provider: PropTypes.array.isRequired,
};

export default SmartTableTbody;
