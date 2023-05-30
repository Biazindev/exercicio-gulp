const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

function comprimeImagens() {
  return gulp.src('./source/images/*')
  .pipe(imagemin())
  .pipe(gulp.dest('./build/images'));
}
gulp.task('minify-images', comprimeImagens);


function comprimeJavaScript() {

  return gulp.src('./source/scripts/*.js')

      .pipe(uglify())

      .pipe(gulp.dest('./build/scripts'))

}

function compilaSass() {
  return gulp
    .src('./source/styles/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./build/styles'));
}

gulp.task('meu-gulp-task', function() {
  return gulp.src('source/');
});

exports.sass = compilaSass;
exports.javascript = comprimeJavaScript;
exports.minify = comprimeImagens;
