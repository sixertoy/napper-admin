import React from 'react';
import { Route } from 'react-router-dom';

import { pathnameToKey } from '../../utils/router';

export const buildSmartPage = route => {
  const { component: SmartPageComponent, path, ...rest } = route;
  const key = pathnameToKey('route', path);
  const props = { config: { ...rest, path }, path };
  return (
    <Route
      exact
      key={key}
      path={path}
      render={() => <SmartPageComponent {...props} />}
    />
  );
};

export const getClassnameStates = (popin, minimized) => {
  const popincss = (popin && 'popin-opened') || '';
  const navcss = (!minimized && 'nav-opened') || '';
  return `${navcss} ${popincss}`;
};
