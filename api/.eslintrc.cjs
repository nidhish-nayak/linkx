// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

/** @type {import("eslint").Linter.Config} */
const config = {
    overrides: [
        {
            files: ["*.ts", "*.js"],
            extends: [
                "plugin:@typescript-eslint/recommended-requiring-type-checking",
            ],
            parserOptions: {
                project: path.join(__dirname, "tsconfig.json"),
            },
        },
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: path.join(__dirname, "tsconfig.json"),
    },
    plugins: ["@typescript-eslint", "prettier"],
    extends: ["plugin:@typescript-eslint/recommended"],
    rules: {
        "no-nested-ternary": "off",
        "no-unused-vars": "off",
        "no-plusplus": [
            "error",
            {
                allowForLoopAfterthoughts: true,
            },
        ],
        "@typescript-eslint/no-explicit-any": "error",
        "@typescript-eslint/no-meaningless-void-operator": "warn",
        "@typescript-eslint/no-confusing-void-expression": "error",
        "@typescript-eslint/no-non-null-asserted-nullish-coalescing": "error",
        "@typescript-eslint/consistent-type-definitions": [1, "type"],
        "@typescript-eslint/no-unused-vars": [
            "error",
            {
                argsIgnorePattern: "^_",
                varsIgnorePattern: "^_",
                caughtErrorsIgnorePattern: "^_",
            },
        ],
        "no-restricted-exports": "off",
        "no-restricted-imports": [
            "error",
            {
                patterns: ["../"],
            },
        ],
        eqeqeq: "error",
        "no-unneeded-ternary": "error",
        "@typescript-eslint/consistent-type-imports": [
            "error",
            {
                prefer: "type-imports",
                fixStyle: "inline-type-imports",
            },
        ],
        "@typescript-eslint/explicit-function-return-type": "off",
        "import/prefer-default-export": "off",
        "arrow-body-style": "off",
    },
};

module.exports = config;
