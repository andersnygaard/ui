import gulp from "gulp";
import path from "path";
import util from "gulp-util";
import config from "../config";
import server from "gulp-express";

import { javaScriptPipeline } from "./javascript";
import { htmlPipeline } from "./html";
import { lessPipeline } from "./less";
import { staticContentPipeline } from "./staticContent";
import { dotnetPipeline } from "./dotnet";
import { javaScriptSpecsPipeline } from "./javascriptSpecs.js";

import chokidar from "chokidar";

import multimatch from "multimatch";


let fileHandlers = [];


function handleFile(file, globs, pipeline, cb) {
    var result = multimatch(file, globs);
    if (result.length == 0) return;

    util.log(
        util.colors.green('File ' + file + ': ') +
        util.colors.magenta(path.basename(file))
    );

    try {
        var stream = gulp.src(file, { base: config.paths.sourceDir });
        pipeline(stream, cb);
    } catch (ex) {
        util.log(ex);
    }
}

export function watchTask(cb) {
    console.log(`Start Watching folder ´${config.paths.rootDir}´`);

    let watcher = chokidar.watch(`${config.paths.rootDir}/.`, {
        persistent: true,
        ignored: `${config.paths.outputDir}/**/*`,
        ignoreInitial: true,
        awaitWriteFinish: {
            stabilityThreshold: 200,
            pollInterval: 100
        }
    });

    let fileHandling = (file) => {
        fileHandlers.forEach(handler => {
            handleFile(file, handler.paths, handler.pipeline, cb);
        });
    };

    watcher
        .on("change", fileHandling)
        .on("add", fileHandling)
        .on("unlink", (file) => {
            // delete
        });
};

export function addFileHandler(paths, pipeline) {
    fileHandlers.push({ paths: paths, pipeline: pipeline });
}

let addFileHandlers = () => {
    addFileHandler(config.paths.htmls, htmlPipeline);
    addFileHandler(config.paths.less, lessPipeline);
    addFileHandler(config.paths.content, staticContentPipeline);
    addFileHandler(config.paths.javascript, javaScriptPipeline);
    addFileHandler(config.paths.javascriptSpecs, javaScriptSpecsPipeline);
};



gulp.task("watch-noserve", cb => {
    addFileHandlers();
    serve = false;
    watchTask(cb);
});

gulp.task("watch", cb => {
    addFileHandlers();
    watchTask(cb);
});