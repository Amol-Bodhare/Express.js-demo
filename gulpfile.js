var gulp = require('gulp');

gulp.task('watch', () => {
    var watcher = gulp.watch('./index.js');
    watcher.on('change', (event) => {
        console.log(`File: ${event.path} was changed!`);
    });
});
gulp.task('default', () => {
    console.log("Gulp is running correctly");
});