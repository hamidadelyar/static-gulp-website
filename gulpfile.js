var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var autoprefixer = require('gulp-autoprefixer');

const PATH_SASS_FILES = 'sass/*.sass';
const PATH_HTML_FILES = '**/*.html';
const PATH_JS_FILES = 'js/**/*.js';
/*
gulp.task('task-name', function () {
  return gulp.src('source-files') // Get source files with gulp.src
    .pipe(aGulpPlugin()) // Sends it through a gulp plugin
    .pipe(gulp.dest('destination')) // Outputs the file in the destination folder
})

*/


gulp.task('sass', function(){
  return gulp.src(PATH_SASS_FILES)
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(autoprefixer({
    	browsers: ['last 2 versions'],
    	cascade: false
    }))
    .pipe(gulp.dest('css'))
    .pipe(browserSync.reload({
    	stream: true
    }))
});

/*
// Gulp watch syntax

gulp.watch('files-to-watch', ['tasks', 'to', 'run']);

*/

gulp.task('watch', ['browserSync', 'sass'], function(){
	gulp.watch(PATH_SASS_FILES, ['sass']);
	// Reloads the browser whenever HTML or JS files change
	gulp.watch(PATH_HTML_FILES, browserSync.reload); 
	gulp.watch(PATH_JS_FILES, browserSync.reload); 
});

/*

gulp.task('watch', ['array', 'of', 'tasks', 'to', 'complete','before', 'watch'], function (){
  // ...
})

*/

gulp.task('browserSync', function(){
	browserSync.init({
		server: {
			baseDir: '.'
		}
	})
})