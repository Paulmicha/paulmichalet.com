
/**
 * @file
 * Solid Start main config file.
 *
 * Used as a SSG here. Setup based on :
 * @link https://github.com/solidjs/solid-start/discussions/1398#discussioncomment-9251262
 */

import { defineConfig } from "@solidjs/start/config";

// TODO [wip] cannot customize build output dir.
// When setting "vite.build.outDir" it breaks the server-fns router :
// ERROR  ENOENT: no such file or directory, open '.vinxi/build/client/_build/server-functions-manifest.json'
export default defineConfig({
  // vite: {
  //   ssr: false,
  //   build: {
  //     outDir: 'dist'
  //   },
  //   plugins: []
  // },
  ssr: false,
  server: {
    static: true,
    prerender: {
      crawlLinks: true,
    },
  },
});
