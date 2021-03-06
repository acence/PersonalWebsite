﻿/// <binding BeforeBuild='build:css-sass-public' ProjectOpened='watch' />

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('build:css-sass-public', () => {
    return gulp.src('./Styles/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./wwwroot/css/'));
});

gulp.task('watch', function () {
    gulp.watch('./Styles/**/*.scss', gulp.series('build:css-sass-public'));
}); 