import { defineConfig, loadEnv } from 'vite'
import { TanStackRouterVite } from '@tanstack/router-vite-plugin'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default ({ mode } : {mode:  any}) => {
  const env = loadEnv(mode, process.cwd(), "");
  return defineConfig({
    define: {
      "process.env": env,
    },
    plugins: [
      react(),
      TanStackRouterVite()
    ],
  });
};
