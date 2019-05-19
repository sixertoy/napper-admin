import compose from './compose';

const pipe = (...fns) => compose.apply(compose, fns.reverse());

export default pipe;
