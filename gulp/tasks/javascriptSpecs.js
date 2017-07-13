import gulp from "gulp";
import config from "../config";
import start from "gulp-start-process";
import {watchTask, addFileHandler} from "./watch";

export function javaScriptSpecsPipeline(stream) {
    start("jspmjasmine --jasmine-config jasmine.json", {setsid: true}, () => {});
    return stream;
}

gulp.task("javascriptspecs", cb => {
    //var stream = gulp.src(config.paths.javascriptSpecs, { base: config.paths.specsDir })
    javaScriptSpecsPipeline();
    //return stream;
    addFileHandler(config.paths.javascript, javaScriptSpecsPipeline);
    addFileHandler(config.paths.javascriptSpecs, javaScriptSpecsPipeline);
    watchTask(cb);
});