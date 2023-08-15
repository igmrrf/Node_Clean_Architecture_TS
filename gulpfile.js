"use strict";
const gulp = require("gulp");
const debug = require("debug")("gulp");
const todo = require("gulp-todo");
const parseArgs = require("minimist");
const conventionalChangelog = require("gulp-conventional-changelog");
const conventionalGithubReleaser = require("conventional-github-releaser");
const bump = require("gulp-bump");
const log = require("fancy-log");
const git = require("gulp-git");
const fs = require("fs");

gulp.task("todo", function () {
  return gulp
    .src(["./src/*.ts", "./src/**/*.ts", "!./node_modules/**", "!./node_modules/*.js"])
    .pipe(todo())
    .pipe(gulp.dest("./"));
});

gulp.task("bump-version", function () {
  const args = parseArgs(process.argv.slice(2));
  if (!args.r) {
    throw new Error(
      "The release type is not defined! Please pass the -r switch with a release type argument (patch/minor/major)",
    );
  } else {
    return gulp
      .src(["./package.json"])
      .pipe(bump({ type: args.r }).on("error", log))
      .pipe(gulp.dest("./"));
  }
});

gulp.task("changelog", function () {
  return gulp
    .src("./CHANGELOG.md", {
      buffer: false,
    })
    .pipe(
      conventionalChangelog({
        preset: "angular",
      }),
    )
    .pipe(gulp.dest("./"));
});

gulp.task("commit-changes", function () {
  return gulp.src(".").pipe(git.add()).pipe(git.commit("[Prerelease] Bumped version number"));
});

gulp.task("push-changes", function (cb) {
  git.push("origin", "dev", cb);
});

gulp.task("create-new-tag", function (cb) {
  const version = JSON.parse(fs.readFileSync("./package.json", "utf8")).version;
  git.tag(version, "Created Tag for version: " + version, function (error) {
    if (error) {
      return cb(error);
    }
    git.push("origin", "dev", { args: "--tags" }, cb);
  });
});

gulp.task("github-release", function (done) {
  conventionalGithubReleaser(
    {
      type: "oauth",
      token: "config.gitOAuthToken",
    },
    {
      preset: "angular",
    },
    done,
  );
});

gulp.task(
  "release",
  gulp.series([
    "todo",
    "bump-version",
    "changelog",
    "commit-changes",
    "push-changes",
    "create-new-tag",
    "github-release",
    function (error) {
      if (error) {
        debug(error.message);
      } else {
        debug("RELEASE FINISHED SUCCESSFULLY");
      }
    },
  ]),
);
