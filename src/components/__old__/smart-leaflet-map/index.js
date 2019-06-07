import React from 'react';
import PropTypes from 'prop-types';
import { Map, ZoomControl, TileLayer } from 'react-leaflet';

import { noop } from '../../utils';

const renderMapMarkers = () => null;

const renderMapLayers = layers =>
  (layers &&
    layers.map(layer => (
      <TileLayer
        key={layer.id}
        url={layer.url}
        minZoom={layer.min}
        maxZoom={layer.max}
        zIndex={layer.order}
        attribution={layer.attribution || ''}
      />
    ))) ||
  null;

const SmartLeafletMap = ({
  zoom,
  center,
  layers,
  styles,
  animate,
  markers,
  minZoom,
  maxZoom,
  onClick,
  onChange,
  useZoomControl,
}) => (
  <Map
    className="smart-leaflet-map"
    zoom={zoom}
    center={center}
    animate={animate}
    onClick={onClick}
    minZoom={minZoom}
    maxZoom={maxZoom}
    zoomControl={false}
    style={{ ...styles }}
    onViewportChanged={onChange}>
    {renderMapLayers(layers)}
    {renderMapMarkers(markers)}
    {useZoomControl && <ZoomControl position="topright" />}
  </Map>
);
SmartLeafletMap.defaultProps = {
  animate: false,
  center: [0, 0],
  layers: null,
  markers: null,
  maxZoom: 30,
  minZoom: 0,
  onChange: noop,
  onClick: noop,
  styles: {},
  useZoomControl: false,
  zoom: 4,
};

SmartLeafletMap.propTypes = {
  animate: PropTypes.bool,
  center: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.string,
  ]),
  layers: PropTypes.array,
  markers: PropTypes.array,
  maxZoom: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  minZoom: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  styles: PropTypes.object,
  useZoomControl: PropTypes.bool,
  zoom: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default SmartLeafletMap;
