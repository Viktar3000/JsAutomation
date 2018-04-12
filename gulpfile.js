const gulp = require("gulp");
const protractor = require("gulp-angular-protractor");

gulp.task("test", () => {
    gulp.src(["spec.js"])
        .pipe(protractor({
            configFile: "protractor.config.js",
            autoStartStopServer : true   
        }))
        .on('error', function(e) { throw e })
})