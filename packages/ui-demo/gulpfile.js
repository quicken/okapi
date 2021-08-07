const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const rename = require("gulp-rename");

gulp.task('minify-css', () => {
	return gulp.src('public/styles/index.css')
	  .pipe(cleanCSS({debug: true}, (details) => {
		console.log(`${details.name}: ${details.stats.originalSize}`);
		console.log(`${details.name}: ${details.stats.minifiedSize}`);
	  }))
		.pipe(rename("public/styles/index.min.css"))
		.pipe(gulp.dest('./'));
  });