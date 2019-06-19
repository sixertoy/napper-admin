import React from 'react';
import { Route } from 'react-router-dom';
// import { slugify } from '@iziges/napper-core';

import { slugify } from '../../../utils';

export const getRouteItemUniqKey = (...strings) =>
  strings
    .filter(str => typeof str === 'string')
    .map(slugify)
    .join('::');

export const getClassnameStates = (popin, minimized) => {
  const popincss = (popin && 'popin-opened') || '';
  const navcss = (!minimized && 'nav-opened') || '';
  return `${navcss} ${popincss}`;
};
