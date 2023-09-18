import { defineConfig, presetUno } from "unocss";

export default defineConfig({
  // ...UnoCSS options
  presets: [
    presetUno({
      dark: "class",
    }),
  ],
  shortcuts: {
    "nav-button":
      "rounded-lg p-4 outline-1 outline-solid outline-black hover:bg-blue-100 transition-all text-2xl",
  },
});
