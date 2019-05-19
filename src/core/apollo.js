import { ApolloLink } from 'apollo-link';
// import ReduxLink from 'apollo-link-redux';
import { onError } from 'apollo-link-error';
import { HttpLink } from 'apollo-link-http';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
// import { createNetworkStatusNotifier } from 'react-apollo-network-status';

// application
import Logger from './logger';
import { omitTypename } from '../utils';

// FIXME ->
// prevents __typename to be send to server
// github.com/apollographql/apollo-client/issues/1564#issuecomment-357492659
const omitTypenameLink = () =>
  new ApolloLink((operation, forward) => {
    if (operation.variables) {
      const str = JSON.stringify(operation.variables);
      // eslint-disable-next-line
      operation.variables = JSON.parse(str, omitTypename);
    }
    return forward(operation);
  });

const reduxErrorLink = dispatch =>
  onError(({ graphQLErrors, networkError, operation }) => {
    const { operationName, variables } = operation;
    const details = `${operationName} => ${JSON.stringify(variables)}`;
    if (graphQLErrors) {
      graphQLErrors.forEach(({ message, locations, path }) => {
        const [{ column, line }] = locations;
        const msg = `[GraphQL error]: ${message}, Path: ${path}, Line: ${line}, Column: ${column}`;
        Logger.debug(msg);
        dispatch({
          error: [msg, details],
          time: Date.now(),
          type: 'graphError',
        });
      });
    }

    if (networkError) {
      const { message, statusCode } = networkError;
      const msg = `[Network error](${statusCode}):  ${message}`;
      Logger.debug(msg);
      dispatch({
        error: [msg, details, statusCode],
        time: Date.now(),
        type: 'networkError',
      });
    }
  });

const createClient = (uri, store) => {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: ApolloLink.from([
      // permet de dispatch des actions
      // start/result pour chaque mutation/query
      // l'application s'en sert pour informer redux.isloading
      // new ReduxLink(store),
      omitTypenameLink(),
      reduxErrorLink(store.dispatch),
      new HttpLink({
        credentials: 'same-origin',
        uri,
      }),
    ]),
  });
  return { client };
};

export default createClient;
