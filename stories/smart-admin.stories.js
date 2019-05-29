import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import { SmartAdmin } from '../src/index';

const manifest = {
  main: 'index.js',
  version: '1.0.0',
};

const routes = {
  main: [{ name: 'Home', path: '/home' }],
  sub: [],
};

storiesOf('SmartAdmin', module).add('to Storybook', () => (
  <SmartAdmin manifest={manifest} routes={routes} />
));
