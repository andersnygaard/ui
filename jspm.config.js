SystemJS.config({
  paths: {
    "npm:": "jspm_packages/npm/",
    "app/": "src/",
    "doLittle": "Source/Master/Web/doLittle/"
  },
  browserConfig: {
    "baseURL": "/"
  },
  devConfig: {
    "map": {
      "plugin-babel": "npm:systemjs-plugin-babel@0.0.25"
    }
  },
  transpiler: "plugin-babel",
  packages: {
    "app": {
      "main": "app.js",
      "meta": {
        "*.js": {
          "loader": "plugin-babel"
        }
      }
    },
    "/": {
      "defaultExtension": "js"
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json"
  ],
  map: {
    "chai": "npm:chai@4.1.0",
    "path": "npm:jspm-nodelibs-path@0.2.3",
    "process": "npm:jspm-nodelibs-process@0.2.1",
    "sinon": "npm:sinon@2.3.7"
  },
  packages: {
    "npm:sinon@2.3.7": {
      "map": {
        "formatio": "npm:formatio@1.2.0",
        "text-encoding": "npm:text-encoding@0.6.4",
        "samsam": "npm:samsam@1.2.1",
        "lolex": "npm:lolex@1.6.0",
        "type-detect": "npm:type-detect@4.0.3",
        "path-to-regexp": "npm:path-to-regexp@1.7.0",
        "diff": "npm:diff@3.3.0",
        "native-promise-only": "npm:native-promise-only@0.8.1"
      }
    },
    "npm:formatio@1.2.0": {
      "map": {
        "samsam": "npm:samsam@1.2.1"
      }
    },
    "npm:path-to-regexp@1.7.0": {
      "map": {
        "isarray": "npm:isarray@0.0.1"
      }
    },
    "npm:chai@4.1.0": {
      "map": {
        "deep-eql": "npm:deep-eql@2.0.2",
        "type-detect": "npm:type-detect@4.0.3",
        "get-func-name": "npm:get-func-name@2.0.0",
        "assertion-error": "npm:assertion-error@1.0.2",
        "pathval": "npm:pathval@1.1.0",
        "check-error": "npm:check-error@1.0.2"
      }
    },
    "npm:deep-eql@2.0.2": {
      "map": {
        "type-detect": "npm:type-detect@3.0.0"
      }
    }
  }
});
