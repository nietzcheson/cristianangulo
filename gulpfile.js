'use strict';

var gulp = require('gulp'),
     sass = require('gulp-sass'),
     browserSync = require('browser-sync'),
     reload = browserSync.reload;

     gulp.task('browser-sync', function() {
       //watch files
       var files = [
         'content/css/app.css',
         //'js/**/*.js',
         //'images/**/*',
         'content/**/*.html',
         'includes/**/*.html',
         'layouts/**/*.html',
       ];
       //initialize browsersync
       browserSync.init(files, {
         proxy: "http://localhost:4000/" // BrowserSync proxy, change to match your local environment
       });
     });

gulp.task('default', ['browser-sync'], function(){
});
