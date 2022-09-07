const plugins = () => {
  const defaultPlugins = [
    [
      "@babel/plugin-transform-runtime",
      {
        absoluteRuntime: false,
        corejs: false,
        helpers: true,
        regenerator: true,
        useESModules: false,
        version: "7.0.0-beta.0",
      },
    ],
    [
      "module-resolver",
      {
        cwd: "babelrc",
        alias: {
          src: "./src",
          test: "./src/test/",
          spec: "./src/spec/",
          app: "./src/app",
          base: "./src/base/",
          module: "./src/modules/",
          containers: "./src/containers",
          utils: "./src/utils/",
          helpers: "./src/helpers/",
          config: "./src/config/",
          domain: "./src/domain/",
          interfaces: "./src/interfaces/",
          routes: "./src/interfaces/rest/routes",
          controllers: "./src/interfaces/rest/controllers",
          Validations: "./src/interfaces/rest/validations",
          middleware: "./src/interfaces/rest/middleware",
        },
      },
    ],
  ];

  return defaultPlugins;
};

module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "12.18.3",
        },
      },
    ],
  ],
  plugins: plugins(),
};
