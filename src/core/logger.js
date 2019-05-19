/*
eslint
no-console: 0
*/
import { usedebug } from './utils';

const Logger = {
  debug: msg => {
    if (!usedebug) return;
    console.log('Logger.debug message => ', msg);
  },
  error: msg => {
    console.log('Logger.error message => ', msg);
  },
  ok: msg => {
    console.log('Logger.ok message => ', msg);
  },
  warn: msg => {
    console.log('Logger.warn message => ', msg);
  },
};

export default Logger;
