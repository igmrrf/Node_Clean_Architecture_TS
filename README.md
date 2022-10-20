# Node Clean Architecture Template

[![Pull Request Check CI](https://github.com/igmrrf/Node_Clean_Architecture/actions/workflows/ci.yml/badge.svg)](https://github.com/igmrrf/Node_Clean_Architecture/actions/workflows/ci.yml) \
A simple starter template for NodeJS apps using clean architecture

## About Clean Architecture

To learn more about clean architecture, please read this article https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html

:warning: DISCLAIMER: This is an opinionated implementation of Clean Architecture. Please feel free to modify it to meet your preference.

## What you get

- Project Structure (adopted from Clean Architecture)
- Dependency Injection
- API Documentation using https://apidocjs.com/
- MongoDB setup
- Testing setup
- Continous Integration Github action
- Configured Express server
- Compliance with [12 factor app](https://12factor.net/)
- Process manager

## Getting started

1. Clone the repository by running `git clone git@github.com:igmrrf/Node_Clean_Architecture.git`
2. Create a `.env` file in the root directory.
3. Copy the content of env.sample into the just created .env file, and add the appropriate values.
4. Install the dependencies by running `npm install`
5. Add data for seeding in ``src/infra/database/seeders/`. Once the app is started, it will automatically seed the database with the data you provide.
6. Run the app using `npm run start`

## Documentation

Visit [http://localhost:30123/rest-docs](http://localhost:30123/rest-docs) for API documentation

## Project structure

- **app**: App contains the use cases of the system. A use case can contain business logic for accomplishig a specific goal. Similar usecases can be grouped together in directories e.g RegisterUser, VerifyUser can be grouped under "users".\
  :warning: NOTE: use-cases should NEVER communicate with any external service such as a database directly. Instead, they should call an interface.
- **config**: Environment specific configurations for the application e.g Database connection options, payment providers, etc. All files created in `config` directory are automatically loaded and exported to
  different application modules.

```js
// ❌ Never ever do this!
const client = new AWS.S3({
  accessKeyId: process.env.IAM_KEY,
  secretAccessKey: process.env.IAM_SECRET,
  Bucket: process.env.BUCKET_NAME,
  endpoint: process.env.AWS_ENDPOINT,
  httpOptions: {
    timeout: 1000 * 60 * 5,
  },
});
```

```js
// ✅ Do this instead!
// All app configurations are automatically exported into this object
import config from "config";
const spacesUrl = config.get("spaces.spacesUrl");
const awsIAMKey = config.get("spaces.awsIAMKey");
const awsIAMSecret = config.get("spaces.awsIAMSecret");
const bucket = config.get("spaces.bucket");
const client = new AWS.S3({
  accessKeyId: awsIAMKey,
  secretAccessKey: awsIAMSecret,
  Bucket: bucket,
  endpoint: spacesEndpoint,
  httpOptions: {
    timeout: 1000 * 60 * 5,
  },
});
```

- **domain**: Domain contain domain specific code e.g entities. A domain here is the real-world context in which you're attempting to solve a problem using software i.e the business thee app will be used for.
  An entity can be an object with methods, or it can be a set of data structures and functions that mirror their real life counterparts. Example of entities in the e-commerce domain might be Customer, Product, Cart, etc. \
  :warning: NOTE: entities should NEVER communicate with any external service such as a database directly.

- **helpers**: Helper functions

- **infra**: All external entities in your app go in here. For example your database, cache, logger, object storage, messaging, payment gateway.

  - **repositories**: Repositories implement logic for retrieving and aggregating data from databses. All repositories inherit common methodds from the `BaseRepository` class. So you don't have to keep writing similar queries multiple times.

  **interfaces**: Interfaces are delivery mechanisms for your app i.e how users access your app. For example, through a REST API, gRPC server, GraphQL. In this example, we are delivering our application using Express web framework for Nodejs.

  **scripts**: One time scripts go here. Read https://12factor.net/admin-processes to learn more

## Dependency Injection

Dependency injection has been setup by default. Read https://stackify.com/dependency-injection/ to learn more about DI (Dependency Injection). [awilix](https://www.npmjs.com/package/awilix) is the package used for implementing DI. Read [this article](https://medium.com/@Jeffijoe/dependency-injection-in-node-js-2016-edition-f2a88efdd427) to get familiar with Awilix. All models, use cases, entities you create are loaded automatically into the container.

## Imports

```js
// NEVER do this! ❌
import Mystuff from "../here/there/onemore/last/mystuff.js"; // 🤮
```

```js
// Do this instead! ✅
import MyStuff from "alias/mystuff.js";
```

Create aliases to make your imports cleaner. To add new aliases, modify `.babelrc.js` and `jsconfig.json`.

## Generating Documentation

To generate documentation for API endpoints, we are using https://apidocjs.com/. You can use Postman or whatever, but apidocjs generates your API documentation from annotations you add to your code.

## Process manager

Never run your app directly against node. Use a process manager. This template uses [PM2](https://pm2.keymetrics.io/)

## Scripts

- `npm run build` - Compiles src code into dist
- `npm run start` - Starts the app in production mode
- `npm run start:dev` - Starts the app in development mode
- `npm run test`: Run tests
- `npm run lint`: Lint code using ESLint
- `npm run db:seed` - Seeds the database
- `npm run docs:api` - generates API docs

## Contributing

I was trying to make this as lean as possible, but if you think there's something I should add, please send in a PR. Thank you!

## Author

[The LDO](https://github.com/igmrrf/Node_Clean_Architecture)
