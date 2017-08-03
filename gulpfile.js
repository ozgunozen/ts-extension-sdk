var gulp = require("gulp"),
    tslint = require("gulp-tslint"),
    tsc = require("gulp-typescript"),
    sourcemaps = require("gulp-sourcemaps"),
    uglify = require("gulp-uglify"),
    runSequence = require("run-sequence"),
    mocha = require("gulp-mocha");
var clean = require('gulp-clean');

var tsSourceAndTestFiles = [
    "source/**/**.ts",
    "test/**/**.test.ts"
];

var tsSourceFiles = [
    "source/**/**.ts",
    "source/**/**.d.ts",
    "!source/test"
];

 var jsTestFiles = ['./dist/test/**/*.test.js'];

var buildOutput = "./dist";

gulp.task('clean', function () {
    return gulp.src(buildOutput, {read: false})
        .pipe(clean());
});

gulp.task("lint", function () {
    var config = {
        formatter: "verbose",
        emitError: (process.env.CI) ? true : false
    };

    return gulp.src(tsSourceAndTestFiles)
        .pipe(tslint(config))
        .pipe(tslint.report());
});

//******************************************************************************
//* BUILD TEST
//******************************************************************************
var tsProject = tsc.createProject("tsconfig.json", {
  typescript: require('typescript'), 
  declaration: true,
});

gulp.task("build-test", function () {
    return gulp.src(tsSourceAndTestFiles, {
            base: "."
        })
        .pipe(tsProject())
        .on("error", function (err) {
            process.exit(1);
        })
        .pipe(gulp.dest(buildOutput));
});

//******************************************************************************
//* TEST
//******************************************************************************
gulp.task("test", function () {
    return gulp.src(jsTestFiles)
        .pipe(mocha());
});

//******************************************************************************
//* BUILD
//******************************************************************************
gulp.task("build-release", function () {
    return gulp.src(tsSourceFiles, {
            base: "."
        })
        .pipe(tsProject())
        .on("error", function (err) {
            process.exit(1);
        })
        .pipe(gulp.dest(buildOutput));
});


//******************************************************************************
//* DEFAULT
//******************************************************************************
gulp.task("default", function (cb) {
    runSequence("clean", "lint", "build-test", "test", "clean", "build-release", cb);
});

gulp.task("build", function (cb) {
    runSequence("clean", "lint", "build-test", cb);
});