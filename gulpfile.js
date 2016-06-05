'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    shell = require('gulp-shell'),
    exec = require('gulp-exec');

    gulp.task('browser-sync', function() {
        var files = [
            'src/content/css/*.sass',
            'src/content/**/*.html',
            'src/includes/**/*.html',
            'src/layouts/**/*.html',
        ];

        browserSync.init(files, {
            proxy: "http://localhost:4000/" // BrowserSync proxy, change to match your local environment
        });

        gulp.watch("src/content/css/*.sass", ['sass']);
    });

    var input = 'src/content/css/*.sass';
    var output = 'src/content/css';

    gulp.task('sass', function(){
        return gulp
            .src(input)

            .pipe(sass())

            .pipe(gulp.dest(output));
    });

    gulp.task('default', ['browser-sync'], function(){});
