import React from 'react';
import { Route } from 'react-router-dom';
// import { slugify } from '@iziges/napper-core';

export const getRouteItemUniqKey = (...strings) =>
  strings &&
  strings
    .filter(str => typeof str === 'string')
    .map(v => v)
    .join('::');

export const getClassnameStates = (popin, minimized) => {
  const popincss = (popin && 'popin-opened') || '';
  const navcss = (!minimized && 'nav-opened') || '';
  return `${navcss} ${popincss}`;
};
