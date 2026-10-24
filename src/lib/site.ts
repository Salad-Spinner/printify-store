const useLocalDev = false;

const localRoot = 'http://localhost:4321';
const productionRoot = 'https://salad-spinner.github.io';
const basePath = useLocalDev ? '/' : '/printify-store/';

export const appRoot = new URL(basePath, useLocalDev ? localRoot : productionRoot).toString();

export function toAppUrl(path = '') {
  const value = String(path ?? '');

  if (!value) return appRoot;
  if (/^https?:\/\//i.test(value)) return value;

  const normalizedPath = value.replace(/^\/+/, '');
  return new URL(normalizedPath, appRoot).toString();
}
