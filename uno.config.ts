// uno.config.ts
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetWebFonts,
} from "unocss";

import { resolve } from "node:path";
import { FileSystemIconLoader } from "unplugin-icons/loaders";
const iconDirectory = resolve(__dirname, "icons");
export default defineConfig({
  presets: [
    presetAttributify({
      /* preset options */
    }),
    presetUno(),
    presetWebFonts({
      provider: "google", // default provider
      fonts: {
        // these will extend the default theme
        sans: "Roboto",
        mono: ["Fira Code", "Fira Mono:400,700"],
        // custom ones
        lobster: "Lobster",
        inter: "Inter",
      },
    }),
    presetIcons({
      customizations: {
        iconCustomizer(collection, icon, props) {
          // customize all icons in this collection
          props.width = "2em";
          props.height = "2em";
          // if (collection === "my-other-icons") {
          //   props.width = "2em";
          //   props.height = "2em";
          // }
        },
        transform(svg) {
          // return svg.replace(/^<svg /, '<svg fill="currentColor" ');
          return svg;
        },
        customize(props) {
          props.width = "4em";
          props.height = "4em";
          return props;
        },
      },
      extraProperties: {
        display: "inline-block",
        "vertical-align": "middle",
      },
      collections: {
        carbon: () =>
          import("@iconify-json/carbon/icons.json").then((i) => i.default),
        mdi: () =>
          import("@iconify-json/mdi/icons.json").then((i) => i.default),
        logos: () =>
          import("@iconify-json/logos/icons.json").then((i) => i.default),
        remote: async (iconName) => {
          // your custom loader here. Do whatever you want.
          // for example, fetch from a remote server:
          return await fetch(`https://example.com/icons/${iconName}.svg`).then(
            (res) => res.text()
          );
        },
        custom: FileSystemIconLoader("src/icons", (svg) => svg),
      },
    }),
  ],
});
