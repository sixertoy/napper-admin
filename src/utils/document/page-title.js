const getPageTitle = (routes, currentpath) => {
  const obj = routes.main
    .concat(routes.sub || [])
    .find(o => o.path === currentpath);
  const title = (obj && obj.name) || 'Home';
  return title;
};

export default getPageTitle;
