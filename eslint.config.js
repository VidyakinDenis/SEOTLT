import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import jsxA11yPlugin from "eslint-plugin-jsx-a11y";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import importPlugin from "eslint-plugin-import";
import unusedImportsPlugin from "eslint-plugin-unused-imports";
import reactRefreshPlugin from "eslint-plugin-react-refresh";
import prettierConfig from "eslint-config-prettier";
import globals from "globals";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
                ...globals.es2021,
            },
            parser: tsParser,
            parserOptions: {
                ecmaFeatures: { jsx: true },
                ecmaVersion: "latest",
                sourceType: "module",
                project: "./tsconfig.json",
            },
        },
    },

    {
        plugins: {
            react: reactPlugin,
            "react-hooks": reactHooksPlugin,
            "jsx-a11y": jsxA11yPlugin,
            "@typescript-eslint": tsPlugin,
            import: importPlugin,
            "unused-imports": unusedImportsPlugin,
            "react-refresh": reactRefreshPlugin,
        },
        rules: {
            "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
            "@typescript-eslint/no-explicit-any": "warn",
            "@typescript-eslint/consistent-type-imports": "error",
            "@typescript-eslint/ban-ts-comment": "warn",
            "@typescript-eslint/no-empty-interface": "warn",

            "react/react-in-jsx-scope": "off",
            "react/prop-types": "off",
            "react/jsx-uses-react": "off",
            "react/jsx-curly-brace-presence": ["error", { props: "never", children: "never" }],
            "react/self-closing-comp": ["error", { component: true, html: true }],

            "react-hooks/rules-of-hooks": "error",
            "react-hooks/exhaustive-deps": "warn",

            "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],

            "import/order": [
                "error",
                {
                    groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
                    "newlines-between": "always",
                    alphabetize: { order: "asc", caseInsensitive: true },
                },
            ],
            "unused-imports/no-unused-imports": "error",

            "no-console": ["warn", { allow: ["warn", "error"] }],
            "no-param-reassign": ["error", { props: true }],
            "prefer-const": "error",
            "eqeqeq": ["error", "always"],
        },
    },

    {
        files: ["**/*.test.ts", "**/*.test.tsx"],
        rules: {
            "@typescript-eslint/no-non-null-assertion": "off",
            "@typescript-eslint/no-explicit-any": "off",
        },
    },
    {
        files: ["src/store/**/*.ts"],
        rules: {
            "no-param-reassign": ["error", { props: false }],
        },
    },
    {
        files: ["vite.config.ts", "src/main.tsx"],
        rules: {
            "import/no-default-export": "off",
        },
    },
    prettierConfig
];