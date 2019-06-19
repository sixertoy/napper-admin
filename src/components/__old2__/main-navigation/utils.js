export const isdisabled = (path, currentpath) =>
  // FIXME use router NavLink with active props
  path !== '/'
    ? path !== '/' && currentpath.indexOf(path) !== -1
    : currentpath === '/';

export const filterWithIcon = obj => obj.icon;
