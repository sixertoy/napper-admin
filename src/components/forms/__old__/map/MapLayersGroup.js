import React from 'react';
import PropTypes from 'prop-types';

import { URLInput } from '../URLInput';
import renderLabel from '../../renderLabel';
import { ArraysInput } from '../ArraysInput';
import { NumberInput } from '../NumberInput';

const defaultValues = {
  max: 30,
  min: 0,
  order: 10,
  url: '',
};

const renderMapLayer = name => (
  <React.Fragment>
    <URLInput label="URL" name={`${name}.url`} />
    <NumberInput label="Ordre" name={`${name}.order`} defaultValue={10} />
    <NumberInput
      label="Min"
      name={`${name}.min`}
      min={0}
      max={30}
      defaultValue={0}
    />
    <NumberInput
      label="Max"
      name={`${name}.max`}
      min={0}
      max={30}
      defaultValue={30}
    />
  </React.Fragment>
);

export const MapLayersGroup = ({ name, label, help, ...rest }) => (
  <ArraysInput
    {...rest}
    canupdate
    name={name}
    defaultValue={defaultValues}
    label={renderLabel(label, help)}
    className={`clearfix map-layers-input ${rest.className || ''}`}>
    {fieldname => renderMapLayer(fieldname)}
  </ArraysInput>
);

MapLayersGroup.defaultProps = {
  help: null,
  label: null,
};

MapLayersGroup.propTypes = {
  help: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
};

export default MapLayersGroup;
