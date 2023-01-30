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
          typed: "./typed",
          app: "./typed/app",
          spec: "./typed/spec/",
          base: "./typed/base/",
          test: "./typed/test/",
          utils: "./typed/utils/",
          config: "./typed/config",
          domain: "./typed/domain/",
          modules: "./typed/modules/",
          helpers: "./typed/helpers/",
          containers: "./typed/containers",
          interfaces: "./typed/interfaces/",
          rest: "typed/interfaces/rest/*",
          grpc: "typed/interfaces/grpc/*",
          errors: "./typed/interfaces/rest/errors",
          routes: "./typed/interfaces/rest/routes",
          controllers: "./typed/interfaces/rest/controllers",
          Validations: "./typed/interfaces/rest/validations",
          middlewares: "./typed/interfaces/rest/middlewares",
        },
      },
    ],
  ];

  return defaultPlugins;
};

module.exports = {
  presets: [
    [
      "@babel/preset-typescript",
      {
        targets: {
          node: "16.18.0",
        },
      },
    ],
  ],
  plugins: plugins(),
};
