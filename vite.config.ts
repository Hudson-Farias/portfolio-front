import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";


declare module "@remix-run/node" {
  interface Future {
    v3_singleFetch: true;
  }
}

export default defineConfig({
  resolve: {
    alias: {
      "@portfolio-icons-lib": path.resolve(__dirname, "../portfolio-icons-lib/dist")
    }
  },

  build: {
    rollupOptions: {
      external: [
        "../portfolio-icons-lib/dist",
        "../portfolio-icons-lib/dist/langs",
        "../portfolio-icons-lib/dist/database",
        "../portfolio-icons-lib/dist/frameworks",
        "../portfolio-icons-lib/dist/tools",
      ]
    }
  },
  plugins: [
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
        v3_singleFetch: true,
        v3_lazyRouteDiscovery: true,
      },
    }),
    tsconfigPaths(),
  ],
});
