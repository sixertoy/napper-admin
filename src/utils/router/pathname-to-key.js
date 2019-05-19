import slugify from '../strings/slugify';

const pathnameToKey = (prefix, path, index = -1) => {
  const idx = (index + 1 > 0 && `::${index + 1}`) || '';
  return `${prefix}::${(path &&
    slugify(path)
      .split('-')
      .join('::')) ||
    ''}${idx}`;
};

export default pathnameToKey;
