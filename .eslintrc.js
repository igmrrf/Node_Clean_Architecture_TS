module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    // "plugin:@typescript-eslint/recommended-requiring-type-checking",
  ],
  parser: "@typescript-eslint/parser",
  ignorePatterns: [
    ".eslintrc.js",
    "node_modules",
    "**/node_modules/*",
    "dist",
    "doc",
    "client",
    "typed",
    "coverage",
    "gulpfile.js",
    "ecosystem.config.js",
  ],
  plugins: ["@typescript-eslint"],
  root: true,
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
  },
};
