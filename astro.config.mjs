import { defineConfig } from 'astro/config';

const useLocalDev = true;

export default defineConfig({
  site: useLocalDev ? 'http://localhost:4321' : 'https://salad-spinner.github.io',
  base: useLocalDev ? '/' : '/printify-store/',
});
