﻿import gulp from "gulp";
import sourcemaps from "gulp-sourcemaps";
import config from "../config";
import babel from "./babel";

export function javaScriptPipeline(stream)
{
    stream
        .pipe(sourcemaps.init())
        .pipe(babel())
        .on("error", (error) => {
            console.error("**** Babel compile error ****");
            console.log(error.fileName);
            console.log(error.message);
            console.log(error.codeFrame);
        })
        .pipe(sourcemaps.write(".", {
            mapSources: (sourcePath, file) => {
                return `../${sourcePath}`;
            }
            //sourceRoot: "../"
        }))
        .pipe(gulp.dest(config.paths.outputDir));
    
    return stream;
}

gulp.task("javascript", () => 
{
    var stream = gulp.src(config.paths.javascript,{base:config.paths.sourceDir})
    javaScriptPipeline(stream);
    return stream;
});
