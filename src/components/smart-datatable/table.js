import React from 'react';
import PropTypes from 'prop-types';

// application
import SmartTableTbody from './tbody';
import SmartTableThead from './thead';
import SmartTableCaption from './caption';
import SmartTableColGroup from './colgroup';

class SmartTable extends React.PureComponent {
  render() {
    const { cols, provider } = this.props;
    return (
      <div className="smartadmin-datatable">
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

SmartTable.defaultProps = {
  // actions: null,
};

SmartTable.propTypes = {
  cols: PropTypes.array.isRequired,
  provider: PropTypes.array.isRequired,
};

// export default compose(
//   withRouter,
//   connect(
//     mapStateToProps,
//     mapDispatchToProps
//   )
// )(SmartDataTable);

export default SmartTable;
