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
  plugins: [
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
          app: "./src/app",
          spec: "./src/spec/",
          base: "./src/base/",
          test: "./src/test/",
          utils: "./src/utils/",
          config: "./src/config",
          domain: "./src/domain/",
          modules: "./src/modules/",
          helpers: "./src/helpers/",
          containers: "./src/containers",
          interfaces: "./src/interfaces/",
          rest: "src/interfaces/rest/*",
          grpc: "src/interfaces/grpc/*",
          errors: "./src/interfaces/rest/errors",
          routes: "./src/interfaces/rest/routes",
          controllers: "./src/interfaces/rest/controllers",
          Validations: "./src/interfaces/rest/validations",
          middlewares: "./src/interfaces/rest/middlewares",
        },
      },
    ],
  ],
};
