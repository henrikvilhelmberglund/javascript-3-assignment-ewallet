import { defineConfig, presetUno } from "unocss";
import presetIcons from "@unocss/preset-icons";

export default defineConfig({
  // ...UnoCSS options
  presets: [
    presetUno({
      dark: "class",
    }),
    presetIcons(),
  ],
  shortcuts: [
    {
      "nav-button":
        "rounded-lg p-4 outline-1 outline-solid outline-black hover:bg-blue-100 transition-all text-2xl",
    },
    [
      /^btn-(.*)$/,
      ([, c]) =>
        `bg-${c}-400 text-${c}-800 text-xl p-4 rounded-lg transition-all hover:bg-${c}-300`,
    ],
  ],
});
