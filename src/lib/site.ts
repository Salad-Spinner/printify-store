const localRoot = 'http://localhost:4321/';
const productionRoot = 'https://salad-spinner.github.io/printify-store/';

export const appRoot = new URL(
  import.meta.env.BASE_URL || '/',
  import.meta.env.DEV ? localRoot : productionRoot,
).toString();

export function toAppUrl(path = '') {
  const normalizedPath = String(path).replace(/^\/+/, '');
  return new URL(normalizedPath, appRoot).toString();
}
