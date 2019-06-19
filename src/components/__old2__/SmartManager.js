import PropTypes from 'prop-types';
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import configure from '../core/store';
import coreReducers from '../reducers';
import createClient from '../core/apollo';
import SmartLayout from './smart-layout/SmartLayout';
import Types from '../types';
import { Logger } from '../core';

const { NODE_ENV, REACT_APP_GRAPHQL_URI } = process.env;

class SmartManager extends React.PureComponent {
  constructor(props) {
    super(props);
    const { initialState, reducers } = this.props;
    this.store = configure(false, initialState, coreReducers, reducers);
    this.client = createClient(REACT_APP_GRAPHQL_URI, this.store).client;
  }

  componentDidMount() {
    const { manifest } = this.props;
    Logger.debug(`
      **** SmartManager Debug ****
      NODE_ENV => ${NODE_ENV}
      REACT_APP_VERSION => ${manifest.version}
      REACT_APP_GRAPHQL_URI => ${REACT_APP_GRAPHQL_URI}
    `);
  }

  render() {
    const { manifest, routes } = this.props;
    return (
      <Provider store={this.store}>
        <ApolloProvider client={this.client}>
          <BrowserRouter>
            <SmartLayout manifest={manifest} routes={routes} />
          </BrowserRouter>
        </ApolloProvider>
      </Provider>
    );
  }
}

SmartManager.defaultProps = {
  initialState: {},
};

SmartManager.propTypes = {
  initialState: Types.shape(),
  manifest: Types.ManifestType.isRequired,
  reducers: PropTypes.shape().isRequired,
  routes: Types.RoutesType.isRequired,
};

export default SmartManager;
