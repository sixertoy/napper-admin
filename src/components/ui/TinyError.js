import React from 'react';
import PropTypes from 'prop-types';

const pickRandomIcon = () => {
  const icons = ['displeased', 'unhappy', 'surprised', 'sleep'];
  const len = icons.length;
  const icon = icons[Math.floor(Math.random() * len)];
  return icon;
};

const TinyError = ({ error: { networkError } }) => {
  const { statusCode } = networkError || {};
  const icon = pickRandomIcon();
  return (
    <div className="tinyerror text-center p12">
      <i className={`icon icon-emo-${icon}`} />
      <span className="is-block is-bold mt12">[{statusCode}]</span>
      <span className="is-block mt12">Ouuups something went wrong!</span>
    </div>
  );
};

TinyError.defaultProps = {
  error: null,
};

TinyError.propTypes = {
  error: PropTypes.object,
};

export default TinyError;
