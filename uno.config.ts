// uno.config.ts
import { defineConfig, presetAttributify, presetUno } from "unocss";
import transformerDirectives from "@unocss/transformer-directives";

export default defineConfig({
  presets: [
    presetUno({
      dark: "media",
    }),
    presetAttributify(),
  ],
  transformers: [transformerDirectives()],
});
