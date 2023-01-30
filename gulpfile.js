const jshint = require("gulp-jshint");
const gulp = require("gulp");
const stylish = require("jshint-stylish");
const nodemon = require("gulp-nodemon");
const debug = require("debug")("gulp");
const todo = require("gulp-todo");
const watch = require("gulp-watch");
const mocha = require("gulp-mocha");
const _ = require("lodash");

const runSequence = require("run-sequence");
const conventionalChangelog = require("gulp-conventional-changelog");
const conventionalGithubReleaser = require("conventional-github-releaser");
const bump = require("gulp-bump");
const gutil = require("gulp-util");
const git = require("gulp-git");
const fs = require("fs");
const argv = require("minimist");
const config = require("./config");

function createTodo() {
  return gulp
    .src(["./*.js", "./**/*.js", "!./node_modules/**", "!./node_modules/*.js"])
    .pipe(todo())
    .pipe(gulp.dest("./"));
}

function lint() {
  return gulp
    .src(["./*.js", "./**/*.js", "!./node_modules/**", "!./node_modules/*.js", "!./template/*.js"])
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
}

function test() {
  process.env.SECURE_MODE = true;
  process.env.NO_CACHE = "no";
  process.env.NODE_ENV = "test";
  // `gulp-mocha` needs filepaths so you can't have any plugins before it

  return gulp.src(["test/*/*.spec.js"], { read: false }).pipe(
    mocha({
      reporter: "spec",
    }),
  );
}

gulp.task("default", () => {
  const stream = nodemon({
    script: "app.js",
    env: { NODE_ENV: "development", DEBUG: "gulp" },
    tasks: ["lint", "test"],
  });

  stream
    .on("restart", () => {
      debug("restarted!");
    })
    .on("crash", () => {
      debug("Application has crashed!\n");
      stream.emit("restart", 10); // restart the server in 10 seconds
    });
});

// Remember to pass argument '--name TheServiceName' or '-n TheServiceName' to the service creation command
// If you want to use an API as a database model, pass the base url and the endpoint. '--baseurl http://google.com' or '--b http://google.com'
// '--endpoint users' or '--e users'
// Note that the name must be singular
gulp.task("service", () => {
  const args = argv(process.argv.slice(2));
  let name;
  let baseurl;
  let endpoint;
  let isSQL;
  baseurl = args.baseurl;
  endpoint = args.endpoint;
  if (!baseurl) {
    baseurl = args.b;
  }

  if (!endpoint) {
    endpoint = args.e;
  }

  isSQL = args.sql;

  name = args.name;

  if (!name) {
    name = args.n;
  }

  if (!name) {
    throw new Error('Please, pass the service name using the "-n" argument or "--name" argument');
  }

  const namePlural = `${_.lowerCase(name)}s`;
  const nameCapitalise = _.capitalize(name);
  const nameCapitalisePlural = `${_.capitalize(name)}s`;
  const nameLowerCase = _.lowerCase(name);

  // Create the Route
  fs.readFile("./template/route.tmpl", (err, data) => {
    if (err) {
      throw err;
    }
    const tpl = _.template(data);
    const result = tpl({ service: nameCapitalise, object: nameLowerCase });

    fs.writeFile(`./routes/${namePlural}.js`, result, (err) => {
      if (err) {
        throw err;
      }
      console.log(`Route created at ./routes/${namePlural}.js`);
    });
  });

  // Create the Route Unit Test
  fs.readFile(isSQL ? "./template/route_sql_test.tmpl" : "./template/route_test.tmpl", (err, data) => {
    if (err) {
      throw err;
    }
    const tpl = _.template(data);
    const result = tpl({
      service: nameCapitalise,
      object: nameLowerCase,
    });

    fs.writeFile(`./test/routes/${namePlural}.js`, result, (err) => {
      if (err) {
        throw err;
      }
      console.log(`Route unit test created at ./test/routes/${namePlural}.js`);
    });
  });

  // Create the Model
  if (baseurl && endpoint) {
    fs.readFile("./template/model_api.tmpl", (err, data) => {
      if (err) {
        throw err;
      }
      const tpl = _.template(data);
      const result = tpl({ baseurl, endpoint });

      fs.writeFile(`./models/${nameCapitalisePlural}.js`, result, (err) => {
        if (err) {
          throw err;
        }
        console.log(`Model created at ./models/${nameCapitalisePlural}.js`);
      });
    });
  } else {
    fs.readFile(isSQL ? "./template/model_sql.tmpl" : "./template/model.tmpl", (err, data) => {
      if (err) {
        throw err;
      }
      const tpl = _.template(data);
      const result = tpl({
        service: nameCapitalise,
        object: nameLowerCase,
      });

      fs.writeFile(`./models/${nameCapitalisePlural}.js`, result, (err) => {
        if (err) {
          throw err;
        }
        console.log(`Model created at ./models/${nameCapitalisePlural}.js`);
      });
    });
  }

  // Create the Model Unit Test
  fs.readFile(isSQL ? "./template/model_sql_test.tmpl" : "./template/model_test.tmpl", (err, data) => {
    if (err) {
      throw err;
    }
    const tpl = _.template(data);
    const result = tpl({
      service: nameCapitalise,
      object: nameLowerCase,
    });

    fs.writeFile(`./test/models/${namePlural}.js`, result, (err) => {
      if (err) {
        throw err;
      }
      console.log(`Model unit test created at ./test/models/${namePlural}.js`);
    });
  });

  // Create the controller
  fs.readFile(isSQL ? "./template/controller_sql.tmpl" : "./template/controller.tmpl", (err, data) => {
    if (err) {
      throw err;
    }
    const tpl = _.template(data);
    const result = tpl({
      service: nameCapitalise,
      object: nameLowerCase,
    });

    fs.writeFile(`./controllers/${nameCapitalisePlural}.js`, result, (err) => {
      if (err) {
        throw err;
      }
      console.log(`Controller created at ./controllers/${nameCapitalisePlural}.js`);
    });
  });

  // Create the controller Unit test
  fs.readFile(isSQL ? "./template/controller_sql_test.tmpl" : "./template/controller_test.tmpl", (err, data) => {
    if (err) {
      throw err;
    }
    const tpl = _.template(data);
    const result = tpl({
      service: nameCapitalise,
      object: nameLowerCase,
    });

    fs.writeFile(`./test/controllers/${namePlural}.js`, result, (err) => {
      if (err) {
        throw err;
      }
      console.log(`Controller unit test created at ./test/controllers/${namePlural}.js`);
    });
  });
});

gulp.task("sanity", gulp.series(lint, test, createTodo));

gulp.task("watch", () => {
  process.env.SECURE_MODE = true;
  process.env.NO_CACHE = "no";
  process.env.NODE_ENV = "test";
  // `gulp-mocha` needs filepaths so you can't have any plugins before it

  return watch(["test/*/*.spec.js"], () => {
    gulp.src(["test/*/*.spec.js"], { read: false }).pipe(
      mocha({
        reporter: "spec",
      }),
    );
  });
});

// Release

gulp.task("changelog", () =>
  gulp
    .src("./CHANGELOG.md", {
      buffer: false,
    })
    .pipe(
      conventionalChangelog({
        preset: "angular", // Or to any other commit message convention you use.
      }),
    )
    .pipe(gulp.dest("./")),
);

gulp.task("github-release", (done) => {
  conventionalGithubReleaser(
    {
      type: "oauth",
      token: config.gitOAuthToken, // change this to your own GitHub token or use an environment variable
    },
    {
      preset: "angular", // Or to any other commit message convention you use.
    },
    done,
  );
});

// Remember to pass argument '-r patch/minor/major' to the release command
gulp.task("bump-version", () => {
  const args = argv(process.argv.slice(2));
  // We hardcode the version change type to 'patch' but it may be a good idea to
  // use minimist (https://www.npmjs.com/package/minimist) to determine with a
  // command argument whether you are doing a 'major', 'minor' or a 'patch' change.
  if (!args.r) {
    throw new Error(
      "The release type is not defined! Please pass the -r switch with a release type argument (patch/minor/major)",
    );
  } else {
    return gulp
      .src(["./package.json"])
      .pipe(bump({ type: args.r }).on("error", gutil.log))
      .pipe(gulp.dest("./"));
  }
});

gulp.task("commit-changes", () =>
  gulp.src(".").pipe(git.add()).pipe(git.commit("[Prerelease] Bumped version number")),
);

gulp.task("push-changes", (cb) => {
  git.push("origin", "dev", cb);
});

gulp.task("create-new-tag", (cb) => {
  const getPackageJsonVersion = function () {
    // We parse the json file instead of using require because require caches
    // multiple calls so the version number won't be updated
    return JSON.parse(fs.readFileSync("./package.json", "utf8")).version;
  };
  const version = getPackageJsonVersion();
  git.tag(version, `Created Tag for version: ${version}`, (error) => {
    if (error) {
      return cb(error);
    }
    git.push("origin", "dev", { args: "--tags" }, cb);
  });
});

gulp.task("release", (callback) => {
  runSequence(
    "sanity",
    "bump-version",
    "changelog",
    "commit-changes",
    "push-changes",
    "create-new-tag",
    "github-release",
    (error) => {
      if (error) {
        console.log(error.message);
      } else {
        console.log("RELEASE FINISHED SUCCESSFULLY");
      }
      callback(error);
    },
  );
});

// gulp.task('lint', function () {
//     return gulp
//         .src(['./*.js', './**/*.js', '!./node_modules/**', '!./node_modules/*.js', '!./template/*.js'])
//         .pipe(jshint())
//         .pipe(jshint.reporter(stylish));
// });

// gulp.task('test', function () {
//     // Override RATE LIMIT HERE FOR UNIT TEST
//     // process.env.RATE_LIMIT = 10;
//     process.env.SECURE_MODE = true;
//     process.env.NO_CACHE = 'no';
//     process.env.NODE_ENV = 'test';
//     gulp.src('./test', { read: false })
//         // `gulp-mocha` needs filepaths so you can't have any plugins before it
//         .pipe(
//             mocha({
//                 reporter: 'spec',
//             })
//         );
// });

// // generate a todo.md from your javascript files
// gulp.task('todo', function () {
//     gulp.src(['./*.js', './**/*.js', '!./node_modules/**', '!./node_modules/*.js'])
//         .pipe(todo())
//         .pipe(gulp.dest('./'));
//     // -> Will output a TODO.md with your todos
// });
