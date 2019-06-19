import React from 'react';
import { Route } from 'react-router-dom';

// import { slugify } from '@iziges/napper-core';
import { slugify } from '../../../napper-core/lib';

export const getRouteItemUniqKey = (...strings) =>
  strings
    .filter(str => typeof str === 'string')
    .map(slugify)
    .join('::');

export const buildSmartPage = (route, index) => {
  const { component: SmartPageComponent, path, ...rest } = route;
  const key = getRouteItemUniqKey('route', path, index);
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
