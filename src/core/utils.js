const { NODE_ENV } = process.env;
const isProductionEnv = NODE_ENV === 'production';

export const useDebug = !isProductionEnv;
export const isProduction = isProductionEnv;
export const isDevelopment = !isProductionEnv;
