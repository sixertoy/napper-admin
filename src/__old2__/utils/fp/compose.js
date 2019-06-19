const compose = (...fns) =>
  fns
    .filter(v => v)
    .reverse()
    .reduce((prev, next) => value => next(prev(value)), value => value);

export default compose;
