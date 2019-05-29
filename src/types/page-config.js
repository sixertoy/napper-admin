import { shape, string } from 'prop-types';

export const PageConfig = shape({
  icon: string,
  name: string.isRequired,
  path: string.isRequired,
  subtitle: string,
});

export default PageConfig;
