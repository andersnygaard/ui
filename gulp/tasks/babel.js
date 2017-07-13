import babel from "gulp-babel";

export default () => {
    return babel({
            presets: ["es2015"],
            plugins: [
                //"/Users/einari/Projects/dolittle/Samples/Basic/Source/Web/babel-plugin-dolittle-extend.js"
                //"C:\\Projects\\dolittle\\Samples\\Basic\\Source\\Web\\babel-plugin-dolittle-extend.js"
            ],
            sourceMaps: true,
            //sourceRoot: "../"
            sourceMaps: "inline"
    });
};