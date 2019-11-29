import React from 'react';
// import PropTypes from 'prop-types';
import { Query } from 'react-apollo';

import { QLObject, ColObject } from './types';
import { NoContent, TinyError, TinyLoader } from '../ui';

const withApollo = (entity, cols, queries, variables) => WrappedComponent => {
  class ComponentWrapper extends React.PureComponent {
    render() {
      return (
        <Query query={queries.query} variables={variables}>
          {({ data, error, loading }) => {
            if (loading) return <TinyLoader />;
            if (error) return <TinyError error={error} />;
            const provider = data[entity] || null;
            const showContent = Boolean(provider && provider.length);
            return (
              <>
                {!showContent && <NoContent />}
                {showContent && <WrappedComponent {...this.props} />}
              </>
            );
          }}
        </Query>
      );
    }
  }

  return ComponentWrapper;
};

export default withApollo;
