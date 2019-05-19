import { slugify } from '../strings';

export const pathnameToClass = path => (path && slugify(path)) || '';

export default pathnameToClass;
