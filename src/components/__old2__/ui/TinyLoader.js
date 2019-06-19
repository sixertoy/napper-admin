import React from 'react';
import { Spin, Icon } from 'antd';

const TinyLoader = () => (
  <div className="tinyloader p12 mb20">
    <Spin indicator={<Icon type="loading" spin />} />
    <span className="ml7">Chargement...</span>
  </div>
);
export default TinyLoader;
