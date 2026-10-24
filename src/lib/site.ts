const localRoot = 'http://localhost:4321';
const productionRoot = 'https://salad-spinner.github.io';
const basePath = import.meta.env.BASE_URL || '/';

export const appRoot = new URL(basePath, import.meta.env.DEV ? localRoot : productionRoot).toString();

export function toAppUrl(path = '') {
  const value = String(path ?? '');

  if (!value) return appRoot;
  if (/^https?:\/\//i.test(value)) return value;

  const normalizedPath = value.replace(/^\/+/, '');
  return new URL(normalizedPath, appRoot).toString();
}
