/// <reference types="vitest/config" />

import { defineConfig } from "vite";

export default defineConfig({
  // Resolve works in jsdom but not in browser
  // resolve: {
  //   alias: [
  //     {
  //       find: 'date-fns',
  //       replacement: 'date-fns-v3',
  //       customResolver(source, importer, options) {
  //         if (importer?.includes('DateFnsV3')) return source
  //         return null
  //       },
  //     }
  //   ]
  // },
  test: {
    setupFiles: ["./vitest.setup.ts"],
  },
});
