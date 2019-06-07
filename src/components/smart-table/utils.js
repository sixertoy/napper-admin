import get from 'lodash.get';

export const KEY_PREFIX = 'smart-datatable';

export const resolveLinkDestination = (location, ...rest) => {
  const { pathname } = location;
  const result = pathname
    .split('/')
    .filter(v => v)
    .concat(rest)
    .join('/');
  return result;
};

export const resolveColValue = (data, col) => {
  let colvalue =
    typeof col.key === 'string' ? get(data, col.key) : col.key(data);
  colvalue = !col.validate ? colvalue : col.validate(colvalue);
  return colvalue;
};

export const resolveColClassname = col => {
  const classname = col.classname || '';
  const key = typeof col.key === 'string' && col.key;
  const type = col.type || key || '';
  const result = `${classname} ${type}`;
  return result.trim();
};
