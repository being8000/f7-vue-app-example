import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "node:url";
import UnoCSS from "unocss/vite";
import { defineConfig } from "vite";
import Icons from "unplugin-icons/vite";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    base: "./",
    plugins: [
      vue(),
      UnoCSS(),
      Icons({
        /* options */
      }),
    ],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
  };
});
