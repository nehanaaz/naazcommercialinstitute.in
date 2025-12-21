import { defineConfig } from 'astro/config';
import { loadEnv } from "vite";

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

const environment = process.env.NODE_ENV || 'development';
const { SITE } = loadEnv(environment, process.cwd() + '/deployments/' + environment, '');

// https://astro.build/config
export default defineConfig({
  output: 'static',
  outDir: '../dist',
  site: SITE,
  trailingSlash: "always",
  integrations: [react()],

  vite: {
    plugins: [tailwindcss()],
  },
});