const { toString } = Object.prototype;

export const isUndefined = (val: unknown) => typeof val === 'undefined';
export const isString = (val: unknown) => typeof val === 'string';
export const isNumber = (val: unknown) => typeof val === 'number';
export const isObject = (val: unknown) => val !== null && typeof val === 'object';
export const isArray = (val: unknown) => toString.call(val) === '[object Array]';

export const isExternal = (val: string) => /^https?:\/\//i.test(val);

export const isDev = process.env.NODE_ENV === 'development';
export const isProd = process.env.NODE_ENV === 'production';
export const isClient = !isUndefined(window);
