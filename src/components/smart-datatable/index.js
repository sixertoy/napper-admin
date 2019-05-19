import React from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';

import SmartTable from './table';
import { QLObject, ColObject } from './types';
import { NoContent, TinyError, TinyLoader } from '../ui';

class SmartDataTable extends React.PureComponent {
  render() {
    const {
      // children,
      cols,
      entity,
      variables,
      queries,
    } = this.props;
    return (
      <Query query={queries.query} variables={variables}>
        {({ loading, error, data }) => {
          if (loading) return <TinyLoader />;
          if (error) return <TinyError error={error} />;
          const provider = data[entity] || null;
          const showTable = Boolean(provider && provider.length);
          return (
            <React.Fragment>
              {!showTable && <NoContent />}
              {showTable && <SmartTable cols={cols} provider={provider} />}
            </React.Fragment>
          );
        }}
      </Query>
    );
  }
}

SmartDataTable.defaultProps = {
  // children: null,
  variables: {},
};

SmartDataTable.propTypes = {
  // children: PropTypes.node.isRequired,
  cols: PropTypes.arrayOf(ColObject).isRequired,
  entity: PropTypes.string.isRequired,
  queries: QLObject.isRequired,
  variables: PropTypes.object,
};

export default SmartDataTable;
