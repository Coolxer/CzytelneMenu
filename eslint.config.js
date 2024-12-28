import eslintPluginAstro from "eslint-plugin-astro";

export default [
  // add more generic rule sets here, such as:
  // js.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  ...eslintPluginAstro.configs["flat/recommended"],
  {
    rules: {
      // override/add rules settings here, such as:
      // "astro/no-set-html-directive": "error"
    },
  },
  {
    ignores: [
      "dist",
      "node_modules",
      ".github",
      "types.generated.d.ts",
      ".astro",
    ],
  },
];
