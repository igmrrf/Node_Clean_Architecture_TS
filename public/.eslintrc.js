module.exports = {
  env: {
    es6: true,
    node: true,
    mocha: true,
  },
  extends: ["airbnb-base", "prettier"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  ignorePatterns: ["src/scripts/gen/*"],
  rules: {
    quotes: [2, "double", { avoidEscape: true }],
    "import/prefer-default-export": "off",
    "class-methods-use-this": "off",
    "max-len": ["warn", { code: 114 }],
    "no-underscore-dangle": [
      "error",
      {
        allow: ["_id", "__v", "_require"],
      },
    ],
    camelcase: "off",
  },
  settings: {
    "import/resolver": {
      "babel-module": {},
      node: {
        paths: ["src"],
        extensions: [".ts", ".tsx"],
      },
    },
  },
};
