const { NODE_ENV } = process.env;
const isProductionEnv = NODE_ENV === 'production';

export const usedebug = !isProductionEnv;
export const isproduction = isProductionEnv;
export const isdevelopment = !isProductionEnv;
