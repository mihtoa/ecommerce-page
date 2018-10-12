var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-csso');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('css', function () {
  return gulp.src('src/css/*.scss')
    .pipe(sass())
    .pipe(minifyCSS())
    .pipe(gulp.dest('dist/css'))
});

gulp.task('js', function () {
  return gulp.src('src/js/*.js')
    .pipe(sourcemaps.init())
    .pipe(concat('app.min.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/js'))
});

gulp.watch(['src/js/*.js', 'src/css/*.scss'], ['css', 'js']);

gulp.task('default', ['css', 'js']);
