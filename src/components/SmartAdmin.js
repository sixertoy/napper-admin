import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter } from 'react-router-dom';

import Types from '../types';
import configure from '../core/store';
import coreReducers from '../reducers';
import createClient from '../core/apollo';
import SmartAdminMainLayout from './smart-admin-layout';
import { Logger } from '../core';

const nodeenv = process.env.NODE_ENV;
const graphqluri = process.env.REACT_APP_GRAPHQL_URI;

class SmartAdmin extends React.PureComponent {
  constructor(props) {
    super(props);
    const { initialState, reducers } = this.props;
    this.store = configure(false, initialState, coreReducers, reducers);
    this.client = createClient(graphqluri, this.store).client;
  }

  componentDidMount() {
    const { manifest } = this.props;
    Logger.debug(`
      **** Smart Admin Application Debug ****
      NODE_ENV => ${nodeenv}
      REACT_APP_VERSION => ${manifest.version}
      REACT_APP_GRAPHQL_URI => ${graphqluri}
    `);
  }

  render() {
    const { manifest, routes } = this.props;
    return (
      <Provider store={this.store}>
        <ApolloProvider client={this.client}>
          <BrowserRouter>
            <SmartAdminMainLayout manifest={manifest} routes={routes} />
          </BrowserRouter>
        </ApolloProvider>
      </Provider>
    );
  }
}

SmartAdmin.defaultProps = {
  initialState: {},
};

SmartAdmin.propTypes = {
  initialState: Types.shape(),
  manifest: Types.ManifestType.isRequired,
  reducers: PropTypes.shape().isRequired,
  routes: Types.RoutesType.isRequired,
};

export default SmartAdmin;
