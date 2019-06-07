import React from 'react';
import { storiesOf } from '@storybook/react';
import { SmartTable } from '@iziges/napper-admin';

import withProvider from './helpers/withProvider';
import MountComponent from './helpers/MountComponent';
import reducers from '../src/reducers';
import configureStore from '../src/core/store';

const store = configureStore({}, reducers);

const smartTableCols = [
  {
    key: 'id',
    label: 'ID',
    primary: true,
  },
  {
    key: 'title',
    label: 'Title',
  },
];

const onMountCallback = callback => {
  fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(callback);
};

storiesOf('SmartTable', module)
  .addDecorator(withProvider(store))
  .add('to Storybook', () => {
    return (
      <MountComponent onMount={onMountCallback}>
        {provider => <SmartTable cols={smartTableCols} provider={provider} />}
      </MountComponent>
    );
  });
