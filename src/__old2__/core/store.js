import { combineReducers, createStore, applyMiddleware } from 'redux';

// application
// import reducers from './../reducers';

const bindMiddleware = (middleware = []) => applyMiddleware(...middleware);

const configure = (initialState = {}, ...reducers) => {
  const mergedReducers = reducers.reduce(
    (acc, obj) => ({ ...acc, ...obj }),
    {}
  );
  const combined = combineReducers(mergedReducers);
  return createStore(combined, initialState, bindMiddleware([]));
};

export default configure;
