import { createStore, applyMiddleware } from 'redux';

// application
// import reducers from './../reducers';

const bindMiddleware = (middleware = []) => applyMiddleware(...middleware);

const configure = (reducers, initialState = {}) =>
  createStore(reducers, initialState, bindMiddleware([]));

export default configure;
