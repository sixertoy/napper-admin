import { slugify } from '../strings';

const getBodyClass = path => `page-${(path && slugify(path)) || 'home'}`;

export default getBodyClass;
