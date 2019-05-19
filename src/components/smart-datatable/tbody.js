import React from 'react';
import PropTypes from 'prop-types';

import SmartTableRow from './row';
import { KEY_PREFIX } from './constants';

class SmartTableTbody extends React.PureComponent {
  render() {
    const { cols, provider } = this.props;
    return (
      <tbody>
        {provider &&
          provider.map((data, index) => (
            <SmartTableRow
              key={`${KEY_PREFIX}::tbody::tr${data.id}`}
              data={data}
              cols={cols}
              index={index}
            />
          ))}
      </tbody>
    );
  }
}

SmartTableTbody.defaultProps = {};

SmartTableTbody.propTypes = {
  // actions: PropTypes.object.isRequired,
  cols: PropTypes.array.isRequired,
  provider: PropTypes.array.isRequired,
};

export default SmartTableTbody;
