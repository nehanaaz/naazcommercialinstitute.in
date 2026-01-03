import { defineConfig } from 'astro/config';
import { loadEnv } from "vite";

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

import partytown from '@astrojs/partytown';

const environment = process.env.NODE_ENV || 'development';
const { SITE } = loadEnv(environment, process.cwd() + '/deployments/' + environment, '');

// https://astro.build/config
export default defineConfig({
  output: 'static',
  outDir: '../dist',
  site: SITE,
  trailingSlash: "ignore",
  integrations: [react(), sitemap(), partytown()],

  vite: {
    plugins: [tailwindcss()],
    alias: {
      '@/constants/': '/src/constants/',
      '@/components/': '/src/components/',
      '@/lib/': '/src/lib/',
      '@/hooks/': '/src/hooks/',
    }
  },
});