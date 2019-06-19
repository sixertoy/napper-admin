import PropTypes, { arrayOf, func, object, shape, string } from 'prop-types';

const Routes = arrayOf(
  shape({
    component: PropTypes.oneOfType([func, object]),
    icon: string,
    name: string,
    path: string,
  })
);

export default Routes;
