import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { combineReducers } from 'redux';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter } from 'react-router-dom';

// import 'antd/dist/antd.css';

import configure from './core/store';
import coreReducers from './reducers';
import createClient from './core/apollo';
import SmartAdminMainLayout from './core-components/main-layout';
import { Logger } from './core';

const SmartAdmin = ({ manifest, reducers, routes }) => {
  Logger.debug(`
    **** Smart Admin Application Debug ****
    NODE_ENV => ${process.env.NODE_ENV}
    REACT_APP_VERSION => ${manifest.version}
    REACT_APP_GRAPHQL_URI => ${process.env.REACT_APP_GRAPHQL_URI}
  `);
  const mergedReducers = combineReducers({ ...coreReducers, ...reducers });
  const store = configure(mergedReducers);
  const graphqluri = process.env.REACT_APP_GRAPHQL_URI;
  const { client } = createClient(graphqluri, store);
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <SmartAdminMainLayout manifest={manifest} routes={routes} />
        </BrowserRouter>
      </ApolloProvider>
    </Provider>
  );
};

SmartAdmin.propTypes = {
  manifest: PropTypes.object.isRequired,
  reducers: PropTypes.object.isRequired,
  routes: PropTypes.object.isRequired,
};

export default SmartAdmin;
