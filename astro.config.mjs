import { defineConfig } from 'astro/config';

export default defineConfig({
<<<<<<< HEAD
  site: useLocalDev ? 'http://localhost:4321' : 'https://salad-spinner.github.io',
  base: useLocalDev ? '/' : '/printify-store/',
=======
  site: 'https://salad-spinner.github.io',
  base: '/printify-store/',
>>>>>>> 3e3d7e9c7464db2cab2cbacaf7185c39a9ffc1bb
  output: 'static',
});
