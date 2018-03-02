const gulp = require('gulp')
const babel = require('gulp-babel')
const autoprefixer = require('gulp-autoprefixer')

gulp.task('js', () => {
    gulp.src('src/*.js')
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(gulp.dest('dist'))
})

gulp.task('css', () => {
    gulp.src('src/*.css')
        .pipe(autoprefixer({
            browsers: ['>1%']
        }))
        .pipe(gulp.dest('dist'))
})

gulp.task('default', ['css', 'js'])