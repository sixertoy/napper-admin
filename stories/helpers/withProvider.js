import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

const withProvider = store => story => {
  return (
    <Provider store={store}>
      <BrowserRouter initialEntries={['/']}>{story()}</BrowserRouter>
    </Provider>
  );
};

export default withProvider;
