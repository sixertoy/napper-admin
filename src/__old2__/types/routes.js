import PropTypes, { func, object, shape, string } from 'prop-types';

const RoutesType = shape({
  component: PropTypes.oneOfType([func, object]),
  icon: string,
  name: string,
  path: string,
});

export default RoutesType;
