import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.js"],
    ...js.configs.recommended,
    languageOptions: {
      globals: globals.node,   // 👈 CHANGE HERE
    },
  },
]);