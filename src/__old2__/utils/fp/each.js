const each = (args, ...functions) =>
  functions.filter(v => v).map(fn => fn(...args));

export default each;
