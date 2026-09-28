import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";

export default [
  { ignores: ["dist/**", "node_modules/**", "private/**", ".claude/**", "coverage/**"] },
  js.configs.recommended,
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: { ...globals.browser, ...globals.es2021 },
      parserOptions: { ecmaFeatures: { jsx: true } }
    },
    settings: { react: { version: "18.3" } },
    plugins: { react, "react-hooks": reactHooks },
    rules: {
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      // o runtime automático do JSX dispensa o import de React
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
      // React 18 só aceita o atributo em minúsculas; a regra segue a grafia do React 19
      "react/no-unknown-property": ["error", { ignore: ["fetchpriority"] }]
    }
  },
  {
    files: ["tests/**/*.{js,jsx}", "scripts/**/*.{js,mjs}"],
    languageOptions: {
      globals: { ...globals.node, ...globals.browser }
    }
  }
];
