import { defineConfig, presetUno } from "unocss";
import presetIcons from "@unocss/preset-icons";
import { presetWebFonts } from "unocss";
import { presetForms } from "@julr/unocss-preset-forms";

export default defineConfig({
  // ...UnoCSS options
  presets: [
    presetUno({
      dark: "class",
    }),
    presetIcons(),
    presetWebFonts({
      fonts: {
        lobster: "Lobster",
        FishCard: "Monoton",
        DuckCard: "Berkshire Swash",
        SvelteCard: "Overpass",
      },
    }),
    presetForms(),
  ],
  safelist: [
    "font-FishCard font-DuckCard font-SvelteCard left-0",
    ...Array.from({ length: 300 }, (_, i) => `top-[${i}px]`),
    ...Array.from({ length: 32 }, (_, i) => `zr-${i}`),
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
