import React from 'react';
import PropTypes from 'prop-types';
import { Input, InputNumber } from 'antd';

import LeafletMap from '../../../smart-leaflet-map';

const noop = () => {};
const defaultZoom = 4;
const defaultCenter = [0, 0];
const defaultParse = (obj, type) => (type && obj[type]) || obj;

const getlattitude = pt => pt && (pt.lat || pt[0]);
const getlongitude = pt => pt && (pt.lng || pt[1]);

const renderPointInput = value => (
  <div className="flex-columns mb7">
    <Input.Group compact>
      <Input
        disabled
        style={{ width: '50%' }}
        value={value && getlattitude(value)}
      />
      <Input
        disabled
        style={{ width: '50%' }}
        value={value && getlongitude(value)}
      />
    </Input.Group>
  </div>
);

class MapInput extends React.PureComponent {
  constructor(props) {
    super(props);
    this.timer = null;
    this.onMapClick = this.onMapClick.bind(this);
    this.onZoomChange = this.onZoomChange.bind(this);
    this.onViewportChanged = this.onViewportChanged.bind(this);
    this.state = {
      center: props.center || defaultCenter,
      zoom: props.zoom || defaultZoom,
    };
  }

  componentWillUnmount() {
    this.onMapClick = null;
    this.onViewportChanged = null;
  }

  onMapClick(point) {
    const { onClick } = this.props;
    onClick(point);
  }

  onViewportChanged({ center, zoom }) {
    const { type, parse, onChange } = this.props;
    this.setState({ center, zoom }, () => {
      const value = parse(this.state, type);
      onChange(value);
    });
  }

  onZoomChange(zoom) {
    const { type, parse, onChange } = this.props;
    this.setState({ zoom }, () => {
      const value = parse(this.state, type);
      onChange(value);
    });
  }

  renderZoomInput(value) {
    return (
      <InputNumber
        className="mb7"
        style={{ width: '100%' }}
        onChange={this.onZoomChange}
        value={value && value.toString()}
      />
    );
  }

  render() {
    const { center, zoom } = this.state;
    const { type, styles, layers, markers, showRulers } = this.props;
    return (
      <React.Fragment>
        {type === 'zoom' && this.renderZoomInput(zoom)}
        {type === 'center' && renderPointInput(center)}
        <div style={{ ...styles }} className="relative mapview-input-container">
          {showRulers && <span className="vertical-ruler" />}
          {showRulers && <span className="horizontal-ruler" />}
          <LeafletMap
            zoom={zoom}
            layers={layers}
            center={center}
            markers={markers}
            style={{ ...styles }}
            onClick={this.onMapClick}
            onChange={this.onViewportChanged}
          />
        </div>
      </React.Fragment>
    );
  }
}

MapInput.defaultProps = {
  center: defaultCenter,
  layers: null,
  markers: null,
  onChange: noop,
  onClick: noop,
  parse: defaultParse,
  showRulers: false,
  styles: {},
  type: null,
  zoom: defaultZoom,
};

MapInput.propTypes = {
  center: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.string,
  ]),
  layers: PropTypes.array,
  markers: PropTypes.array,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  parse: PropTypes.func,
  showRulers: PropTypes.bool,
  styles: PropTypes.object,
  type: PropTypes.string,
  zoom: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default MapInput;
