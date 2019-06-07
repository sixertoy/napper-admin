import React from 'react';
import PropTypes from 'prop-types';

// application
import SmartTableTbody from './table/tbody';
import SmartTableThead from './table/thead';
import SmartTableCaption from './table/caption';
import SmartTableColGroup from './table/colgroup';
import { SmartTableColType } from './types';

class SmartTableComponent extends React.PureComponent {
  render() {
    const { cols, provider } = this.props;
    return (
      <div className="">
        <table>
          <SmartTableCaption provider={provider} />
          <SmartTableColGroup cols={cols} />
          <SmartTableThead cols={cols} />
          <SmartTableTbody cols={cols} provider={provider} />
        </table>
      </div>
    );
  }
}

SmartTableComponent.propTypes = {
  cols: SmartTableColType.isRequired,
  provider: PropTypes.array.isRequired,
};

export default SmartTableComponent;
