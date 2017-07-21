SystemJS.config({
    paths: {
        "npm:": "jspm_packages/npm/",
        "doLittle": "Source/Master/Web/doLittle",
        "constructors": "./constructors",
        "Specifications": "Specifications/Master/**/*.js",
        "app/": "src/",
        "babel-plugin-dolittle-constructors": "./babel-plugin-dolittle-constructors.js"
    },
    browserConfig: {
        "baseURL": "/"
    },
    devConfig: {
        "map": {
            "plugin-babel": "npm:systemjs-plugin-babel@0.0.25",
            "jspm-mock": "npm:jspm-mock@2.0.0",
            "jspm": "npm:jspm@0.16.53",
            "child_process": "npm:jspm-nodelibs-child_process@0.2.1",
            "uglify-to-browserify": "npm:uglify-to-browserify@1.0.2",
            "util": "npm:jspm-nodelibs-util@0.2.2",
            "constants": "npm:jspm-nodelibs-constants@0.2.1",
            "stream": "npm:jspm-nodelibs-stream@0.2.1",
            "events": "npm:jspm-nodelibs-events@0.2.2",
            "jsbn": "npm:jsbn@0.1.1",
            "ecc-jsbn": "npm:ecc-jsbn@0.1.1",
            "bcrypt-pbkdf": "npm:bcrypt-pbkdf@1.0.1",
            "tweetnacl": "npm:tweetnacl@0.14.5",
            "crypto": "npm:jspm-nodelibs-crypto@0.2.1",
            "http": "npm:jspm-nodelibs-http@0.2.0",
            "https": "npm:jspm-nodelibs-https@0.2.2",
            "net": "npm:jspm-nodelibs-net@0.2.1",
            "url": "npm:jspm-nodelibs-url@0.2.1",
            "tls": "npm:jspm-nodelibs-tls@0.2.1",
            "buffer": "npm:jspm-nodelibs-buffer@0.2.3",
            "querystring": "npm:jspm-nodelibs-querystring@0.2.2",
            "string_decoder": "npm:jspm-nodelibs-string_decoder@0.2.1",
            "zlib": "npm:jspm-nodelibs-zlib@0.2.3",
            "vm": "npm:jspm-nodelibs-vm@0.2.1",
            "os": "npm:jspm-nodelibs-os@0.2.2",
            "dns": "npm:jspm-nodelibs-dns@0.2.1",
            "tty": "npm:jspm-nodelibs-tty@0.2.1",
            "module": "npm:jspm-nodelibs-module@0.2.1",
            "dgram": "npm:jspm-nodelibs-dgram@0.2.1",
            "cluster": "npm:jspm-nodelibs-cluster@0.2.1",
            "readline": "npm:jspm-nodelibs-readline@0.2.1",
            "repl": "npm:jspm-nodelibs-repl@0.2.1",
            "punycode": "npm:jspm-nodelibs-punycode@0.2.1",
            "timers": "npm:jspm-nodelibs-timers@0.2.1",
            "domain": "npm:jspm-nodelibs-domain@0.2.1",
            "console": "npm:jspm-nodelibs-console@0.2.3"
        },
        "packages": {
            "npm:jspm-mock@2.0.0": {
                "map": {
                    "exit": "npm:exit@0.1.2",
                    "tosource": "npm:tosource@1.0.0",
                    "lodash": "npm:lodash@4.17.4"
                }
            },
            "npm:jspm@0.16.53": {
                "map": {
                    "chalk": "npm:chalk@1.1.3",
                    "graceful-fs": "npm:graceful-fs@4.1.11",
                    "minimatch": "npm:minimatch@3.0.4",
                    "jspm-registry": "npm:jspm-registry@0.4.4",
                    "mkdirp": "npm:mkdirp@0.5.1",
                    "ncp": "npm:ncp@2.0.0",
                    "liftoff": "npm:liftoff@2.3.0",
                    "proper-lockfile": "npm:proper-lockfile@1.2.0",
                    "semver": "npm:semver@5.3.0",
                    "rimraf": "npm:rimraf@2.6.1",
                    "glob": "npm:glob@6.0.4",
                    "rsvp": "npm:rsvp@3.6.2",
                    "jspm-npm": "npm:jspm-npm@0.26.14",
                    "jspm-github": "npm:jspm-github@0.13.18",
                    "request": "npm:request@2.81.0",
                    "uglify-js": "npm:uglify-js@2.8.29",
                    "systemjs": "npm:systemjs@0.19.46",
                    "systemjs-builder": "npm:systemjs-builder@0.15.36",
                    "core-js": "npm:core-js@1.2.7",
                    "traceur": "npm:traceur@0.0.105"
                }
            },
            "npm:jspm-registry@0.4.4": {
                "map": {
                    "graceful-fs": "npm:graceful-fs@4.1.11",
                    "semver": "npm:semver@4.3.6",
                    "rimraf": "npm:rimraf@2.6.1",
                    "rsvp": "npm:rsvp@3.6.2"
                }
            },
            "npm:proper-lockfile@1.2.0": {
                "map": {
                    "graceful-fs": "npm:graceful-fs@4.1.11",
                    "extend": "npm:extend@3.0.1",
                    "err-code": "npm:err-code@1.1.2",
                    "retry": "npm:retry@0.10.1"
                }
            },
            "npm:rimraf@2.6.1": {
                "map": {
                    "glob": "npm:glob@7.1.2"
                }
            },
            "npm:glob@7.1.2": {
                "map": {
                    "minimatch": "npm:minimatch@3.0.4",
                    "fs.realpath": "npm:fs.realpath@1.0.0",
                    "inflight": "npm:inflight@1.0.6",
                    "path-is-absolute": "npm:path-is-absolute@1.0.1",
                    "once": "npm:once@1.4.0",
                    "inherits": "npm:inherits@2.0.3"
                }
            },
            "npm:glob@6.0.4": {
                "map": {
                    "minimatch": "npm:minimatch@3.0.4",
                    "inflight": "npm:inflight@1.0.6",
                    "path-is-absolute": "npm:path-is-absolute@1.0.1",
                    "once": "npm:once@1.4.0",
                    "inherits": "npm:inherits@2.0.3"
                }
            },
            "npm:jspm-npm@0.26.14": {
                "map": {
                    "glob": "npm:glob@5.0.15",
                    "graceful-fs": "npm:graceful-fs@4.1.11",
                    "mkdirp": "npm:mkdirp@0.5.1",
                    "rsvp": "npm:rsvp@3.6.2",
                    "semver": "npm:semver@5.3.0",
                    "request": "npm:request@2.81.0",
                    "systemjs-builder": "npm:systemjs-builder@0.15.36",
                    "resolve": "npm:resolve@1.3.3",
                    "buffer-peek-stream": "npm:buffer-peek-stream@1.0.1",
                    "which": "npm:which@1.2.14",
                    "tar": "npm:tar@1.0.3"
                }
            },
            "npm:jspm-github@0.13.18": {
                "map": {
                    "graceful-fs": "npm:graceful-fs@4.1.11",
                    "mkdirp": "npm:mkdirp@0.5.1",
                    "request": "npm:request@2.81.0",
                    "rimraf": "npm:rimraf@2.6.1",
                    "rsvp": "npm:rsvp@3.6.2",
                    "semver": "npm:semver@5.3.0",
                    "which": "npm:which@1.2.14",
                    "expand-tilde": "npm:expand-tilde@1.2.2",
                    "netrc": "npm:netrc@0.1.4",
                    "tar": "npm:tar@2.2.1",
                    "yauzl": "npm:yauzl@2.8.0"
                }
            },
            "npm:glob@5.0.15": {
                "map": {
                    "minimatch": "npm:minimatch@3.0.4",
                    "inflight": "npm:inflight@1.0.6",
                    "path-is-absolute": "npm:path-is-absolute@1.0.1",
                    "once": "npm:once@1.4.0",
                    "inherits": "npm:inherits@2.0.3"
                }
            },
            "npm:systemjs-builder@0.15.36": {
                "map": {
                    "uglify-js": "npm:uglify-js@2.7.5",
                    "glob": "npm:glob@7.1.2",
                    "mkdirp": "npm:mkdirp@0.5.1",
                    "systemjs": "npm:systemjs@0.19.47",
                    "traceur": "npm:traceur@0.0.105",
                    "data-uri-to-buffer": "npm:data-uri-to-buffer@0.0.4",
                    "babel-plugin-transform-es2015-modules-systemjs": "npm:babel-plugin-transform-es2015-modules-systemjs@6.24.1",
                    "es6-template-strings": "npm:es6-template-strings@2.0.1",
                    "source-map": "npm:source-map@0.5.6",
                    "bluebird": "npm:bluebird@3.5.0",
                    "babel-plugin-transform-system-register": "npm:babel-plugin-transform-system-register@0.0.1",
                    "babel-plugin-transform-global-system-wrapper": "npm:babel-plugin-transform-global-system-wrapper@0.0.1",
                    "rollup": "npm:rollup@0.36.4",
                    "babel-plugin-transform-cjs-system-wrapper": "npm:babel-plugin-transform-cjs-system-wrapper@0.3.0",
                    "babel-core": "npm:babel-core@6.25.0"
                }
            },
            "npm:chalk@1.1.3": {
                "map": {
                    "escape-string-regexp": "npm:escape-string-regexp@1.0.5",
                    "has-ansi": "npm:has-ansi@2.0.0",
                    "ansi-styles": "npm:ansi-styles@2.2.1",
                    "supports-color": "npm:supports-color@2.0.0",
                    "strip-ansi": "npm:strip-ansi@3.0.1"
                }
            },
            "npm:traceur@0.0.105": {
                "map": {
                    "glob": "npm:glob@5.0.15",
                    "rsvp": "npm:rsvp@3.6.2",
                    "semver": "npm:semver@4.3.6",
                    "commander": "npm:commander@2.9.0",
                    "source-map-support": "npm:source-map-support@0.2.10"
                }
            },
            "npm:minimatch@3.0.4": {
                "map": {
                    "brace-expansion": "npm:brace-expansion@1.1.8"
                }
            },
            "npm:mkdirp@0.5.1": {
                "map": {
                    "minimist": "npm:minimist@0.0.8"
                }
            },
            "npm:liftoff@2.3.0": {
                "map": {
                    "extend": "npm:extend@3.0.1",
                    "fined": "npm:fined@1.1.0",
                    "lodash.isstring": "npm:lodash.isstring@4.0.1",
                    "findup-sync": "npm:findup-sync@0.4.3",
                    "rechoir": "npm:rechoir@0.6.2",
                    "lodash.mapvalues": "npm:lodash.mapvalues@4.6.0",
                    "flagged-respawn": "npm:flagged-respawn@0.3.2",
                    "lodash.isplainobject": "npm:lodash.isplainobject@4.0.6",
                    "resolve": "npm:resolve@1.3.3"
                }
            },
            "npm:request@2.81.0": {
                "map": {
                    "extend": "npm:extend@3.0.1",
                    "aws-sign2": "npm:aws-sign2@0.6.0",
                    "forever-agent": "npm:forever-agent@0.6.1",
                    "caseless": "npm:caseless@0.12.0",
                    "combined-stream": "npm:combined-stream@1.0.5",
                    "is-typedarray": "npm:is-typedarray@1.0.0",
                    "isstream": "npm:isstream@0.1.2",
                    "json-stringify-safe": "npm:json-stringify-safe@5.0.1",
                    "oauth-sign": "npm:oauth-sign@0.8.2",
                    "stringstream": "npm:stringstream@0.0.5",
                    "tunnel-agent": "npm:tunnel-agent@0.6.0",
                    "form-data": "npm:form-data@2.1.4",
                    "http-signature": "npm:http-signature@1.1.1",
                    "aws4": "npm:aws4@1.6.0",
                    "performance-now": "npm:performance-now@0.2.0",
                    "uuid": "npm:uuid@3.1.0",
                    "har-validator": "npm:har-validator@4.2.1",
                    "tough-cookie": "npm:tough-cookie@2.3.2",
                    "mime-types": "npm:mime-types@2.1.15",
                    "safe-buffer": "npm:safe-buffer@5.1.1",
                    "hawk": "npm:hawk@3.1.3",
                    "qs": "npm:qs@6.4.0"
                }
            },
            "npm:rechoir@0.6.2": {
                "map": {
                    "resolve": "npm:resolve@1.3.3"
                }
            },
            "npm:inflight@1.0.6": {
                "map": {
                    "once": "npm:once@1.4.0",
                    "wrappy": "npm:wrappy@1.0.2"
                }
            },
            "npm:fined@1.1.0": {
                "map": {
                    "expand-tilde": "npm:expand-tilde@2.0.2",
                    "object.pick": "npm:object.pick@1.2.0",
                    "parse-filepath": "npm:parse-filepath@1.0.1",
                    "object.defaults": "npm:object.defaults@1.1.0",
                    "is-plain-object": "npm:is-plain-object@2.0.4"
                }
            },
            "npm:tar@1.0.3": {
                "map": {
                    "inherits": "npm:inherits@2.0.3",
                    "block-stream": "npm:block-stream@0.0.9",
                    "fstream": "npm:fstream@1.0.11"
                }
            },
            "npm:tar@2.2.1": {
                "map": {
                    "inherits": "npm:inherits@2.0.3",
                    "block-stream": "npm:block-stream@0.0.9",
                    "fstream": "npm:fstream@1.0.11"
                }
            },
            "npm:uglify-js@2.7.5": {
                "map": {
                    "uglify-to-browserify": "npm:uglify-to-browserify@1.0.2",
                    "source-map": "npm:source-map@0.5.6",
                    "async": "npm:async@0.2.10",
                    "yargs": "npm:yargs@3.10.0"
                }
            },
            "npm:form-data@2.1.4": {
                "map": {
                    "combined-stream": "npm:combined-stream@1.0.5",
                    "mime-types": "npm:mime-types@2.1.15",
                    "asynckit": "npm:asynckit@0.4.0"
                }
            },
            "npm:has-ansi@2.0.0": {
                "map": {
                    "ansi-regex": "npm:ansi-regex@2.1.1"
                }
            },
            "npm:strip-ansi@3.0.1": {
                "map": {
                    "ansi-regex": "npm:ansi-regex@2.1.1"
                }
            },
            "npm:tunnel-agent@0.6.0": {
                "map": {
                    "safe-buffer": "npm:safe-buffer@5.1.1"
                }
            },
            "npm:brace-expansion@1.1.8": {
                "map": {
                    "concat-map": "npm:concat-map@0.0.1",
                    "balanced-match": "npm:balanced-match@1.0.0"
                }
            },
            "npm:systemjs@0.19.46": {
                "map": {
                    "when": "npm:when@3.7.8"
                }
            },
            "npm:systemjs@0.19.47": {
                "map": {
                    "when": "npm:when@3.7.8"
                }
            },
            "npm:findup-sync@0.4.3": {
                "map": {
                    "detect-file": "npm:detect-file@0.1.0",
                    "is-glob": "npm:is-glob@2.0.1",
                    "resolve-dir": "npm:resolve-dir@0.1.1",
                    "micromatch": "npm:micromatch@2.3.11"
                }
            },
            "npm:uglify-js@2.8.29": {
                "map": {
                    "source-map": "npm:source-map@0.5.6",
                    "yargs": "npm:yargs@3.10.0"
                }
            },
            "npm:resolve@1.3.3": {
                "map": {
                    "path-parse": "npm:path-parse@1.0.5"
                }
            },
            "npm:once@1.4.0": {
                "map": {
                    "wrappy": "npm:wrappy@1.0.2"
                }
            },
            "npm:resolve-dir@0.1.1": {
                "map": {
                    "expand-tilde": "npm:expand-tilde@1.2.2",
                    "global-modules": "npm:global-modules@0.2.3"
                }
            },
            "npm:which@1.2.14": {
                "map": {
                    "isexe": "npm:isexe@2.0.0"
                }
            },
            "npm:micromatch@2.3.11": {
                "map": {
                    "is-glob": "npm:is-glob@2.0.1",
                    "filename-regex": "npm:filename-regex@2.0.1",
                    "object.omit": "npm:object.omit@2.0.1",
                    "normalize-path": "npm:normalize-path@2.1.1",
                    "parse-glob": "npm:parse-glob@3.0.4",
                    "regex-cache": "npm:regex-cache@0.4.3",
                    "array-unique": "npm:array-unique@0.2.1",
                    "is-extglob": "npm:is-extglob@1.0.0",
                    "arr-diff": "npm:arr-diff@2.0.0",
                    "kind-of": "npm:kind-of@3.2.2",
                    "extglob": "npm:extglob@0.3.2",
                    "expand-brackets": "npm:expand-brackets@0.1.5",
                    "braces": "npm:braces@1.8.5"
                }
            },
            "npm:expand-tilde@2.0.2": {
                "map": {
                    "homedir-polyfill": "npm:homedir-polyfill@1.0.1"
                }
            },
            "npm:expand-tilde@1.2.2": {
                "map": {
                    "os-homedir": "npm:os-homedir@1.0.2"
                }
            },
            "npm:yauzl@2.8.0": {
                "map": {
                    "buffer-crc32": "npm:buffer-crc32@0.2.13",
                    "fd-slicer": "npm:fd-slicer@1.0.1"
                }
            },
            "npm:combined-stream@1.0.5": {
                "map": {
                    "delayed-stream": "npm:delayed-stream@1.0.0"
                }
            },
            "npm:http-signature@1.1.1": {
                "map": {
                    "assert-plus": "npm:assert-plus@0.2.0",
                    "jsprim": "npm:jsprim@1.4.0",
                    "sshpk": "npm:sshpk@1.13.1"
                }
            },
            "npm:block-stream@0.0.9": {
                "map": {
                    "inherits": "npm:inherits@2.0.3"
                }
            },
            "npm:fstream@1.0.11": {
                "map": {
                    "graceful-fs": "npm:graceful-fs@4.1.11",
                    "inherits": "npm:inherits@2.0.3",
                    "rimraf": "npm:rimraf@2.6.1",
                    "mkdirp": "npm:mkdirp@0.5.1"
                }
            },
            "npm:jsprim@1.4.0": {
                "map": {
                    "assert-plus": "npm:assert-plus@1.0.0",
                    "extsprintf": "npm:extsprintf@1.0.2",
                    "json-schema": "npm:json-schema@0.2.3",
                    "verror": "npm:verror@1.3.6"
                }
            },
            "npm:sshpk@1.13.1": {
                "map": {
                    "assert-plus": "npm:assert-plus@1.0.0",
                    "getpass": "npm:getpass@0.1.7",
                    "asn1": "npm:asn1@0.2.3",
                    "dashdash": "npm:dashdash@1.14.1"
                }
            },
            "npm:har-validator@4.2.1": {
                "map": {
                    "har-schema": "npm:har-schema@1.0.5",
                    "ajv": "npm:ajv@4.11.8"
                }
            },
            "npm:babel-plugin-transform-es2015-modules-systemjs@6.24.1": {
                "map": {
                    "babel-helper-hoist-variables": "npm:babel-helper-hoist-variables@6.24.1",
                    "babel-template": "npm:babel-template@6.25.0",
                    "babel-runtime": "npm:babel-runtime@6.23.0"
                }
            },
            "npm:detect-file@0.1.0": {
                "map": {
                    "fs-exists-sync": "npm:fs-exists-sync@0.1.0"
                }
            },
            "npm:parse-filepath@1.0.1": {
                "map": {
                    "path-root": "npm:path-root@0.1.1",
                    "map-cache": "npm:map-cache@0.2.2",
                    "is-absolute": "npm:is-absolute@0.2.6"
                }
            },
            "npm:babel-plugin-transform-global-system-wrapper@0.0.1": {
                "map": {
                    "babel-template": "npm:babel-template@6.25.0"
                }
            },
            "npm:babel-plugin-transform-cjs-system-wrapper@0.3.0": {
                "map": {
                    "babel-template": "npm:babel-template@6.25.0"
                }
            },
            "npm:object.pick@1.2.0": {
                "map": {
                    "isobject": "npm:isobject@2.1.0"
                }
            },
            "npm:object.defaults@1.1.0": {
                "map": {
                    "isobject": "npm:isobject@3.0.1",
                    "array-slice": "npm:array-slice@1.0.0",
                    "array-each": "npm:array-each@1.0.1",
                    "for-own": "npm:for-own@1.0.0"
                }
            },
            "npm:is-plain-object@2.0.4": {
                "map": {
                    "isobject": "npm:isobject@3.0.1"
                }
            },
            "npm:hawk@3.1.3": {
                "map": {
                    "sntp": "npm:sntp@1.0.9",
                    "cryptiles": "npm:cryptiles@2.0.5",
                    "hoek": "npm:hoek@2.16.3",
                    "boom": "npm:boom@2.10.1"
                }
            },
            "npm:tough-cookie@2.3.2": {
                "map": {
                    "punycode": "npm:punycode@1.4.1"
                }
            },
            "npm:babel-template@6.25.0": {
                "map": {
                    "lodash": "npm:lodash@4.17.4",
                    "babel-runtime": "npm:babel-runtime@6.23.0",
                    "babel-traverse": "npm:babel-traverse@6.25.0",
                    "babel-types": "npm:babel-types@6.25.0",
                    "babylon": "npm:babylon@6.17.4"
                }
            },
            "npm:sntp@1.0.9": {
                "map": {
                    "hoek": "npm:hoek@2.16.3"
                }
            },
            "npm:cryptiles@2.0.5": {
                "map": {
                    "boom": "npm:boom@2.10.1"
                }
            },
            "npm:rollup@0.36.4": {
                "map": {
                    "source-map-support": "npm:source-map-support@0.4.15"
                }
            },
            "npm:babel-helper-hoist-variables@6.24.1": {
                "map": {
                    "babel-runtime": "npm:babel-runtime@6.23.0",
                    "babel-types": "npm:babel-types@6.25.0"
                }
            },
            "npm:boom@2.10.1": {
                "map": {
                    "hoek": "npm:hoek@2.16.3"
                }
            },
            "npm:source-map-support@0.2.10": {
                "map": {
                    "source-map": "npm:source-map@0.1.32"
                }
            },
            "npm:source-map-support@0.4.15": {
                "map": {
                    "source-map": "npm:source-map@0.5.6"
                }
            },
            "npm:yargs@3.10.0": {
                "map": {
                    "decamelize": "npm:decamelize@1.2.0",
                    "camelcase": "npm:camelcase@1.2.1",
                    "cliui": "npm:cliui@2.1.0",
                    "window-size": "npm:window-size@0.1.0"
                }
            },
            "npm:homedir-polyfill@1.0.1": {
                "map": {
                    "parse-passwd": "npm:parse-passwd@1.0.0"
                }
            },
            "npm:is-glob@2.0.1": {
                "map": {
                    "is-extglob": "npm:is-extglob@1.0.0"
                }
            },
            "npm:fd-slicer@1.0.1": {
                "map": {
                    "pend": "npm:pend@1.2.0"
                }
            },
            "npm:object.omit@2.0.1": {
                "map": {
                    "for-own": "npm:for-own@0.1.5",
                    "is-extendable": "npm:is-extendable@0.1.1"
                }
            },
            "npm:babel-runtime@6.23.0": {
                "map": {
                    "core-js": "npm:core-js@2.4.1",
                    "regenerator-runtime": "npm:regenerator-runtime@0.10.5"
                }
            },
            "npm:mime-types@2.1.15": {
                "map": {
                    "mime-db": "npm:mime-db@1.27.0"
                }
            },
            "npm:parse-glob@3.0.4": {
                "map": {
                    "is-extglob": "npm:is-extglob@1.0.0",
                    "is-glob": "npm:is-glob@2.0.1",
                    "glob-base": "npm:glob-base@0.3.0",
                    "is-dotfile": "npm:is-dotfile@1.0.3"
                }
            },
            "npm:es6-template-strings@2.0.1": {
                "map": {
                    "esniff": "npm:esniff@1.1.0",
                    "es5-ext": "npm:es5-ext@0.10.24"
                }
            },
            "npm:isobject@2.1.0": {
                "map": {
                    "isarray": "npm:isarray@1.0.0"
                }
            },
            "npm:extglob@0.3.2": {
                "map": {
                    "is-extglob": "npm:is-extglob@1.0.0"
                }
            },
            "npm:jspm-nodelibs-stream@0.2.1": {
                "map": {
                    "stream-browserify": "npm:stream-browserify@2.0.1"
                }
            },
            "npm:esniff@1.1.0": {
                "map": {
                    "es5-ext": "npm:es5-ext@0.10.24",
                    "d": "npm:d@1.0.0"
                }
            },
            "npm:path-root@0.1.1": {
                "map": {
                    "path-root-regex": "npm:path-root-regex@0.1.2"
                }
            },
            "npm:is-absolute@0.2.6": {
                "map": {
                    "is-windows": "npm:is-windows@0.2.0",
                    "is-relative": "npm:is-relative@0.2.1"
                }
            },
            "npm:global-modules@0.2.3": {
                "map": {
                    "is-windows": "npm:is-windows@0.2.0",
                    "global-prefix": "npm:global-prefix@0.1.5"
                }
            },
            "npm:getpass@0.1.7": {
                "map": {
                    "assert-plus": "npm:assert-plus@1.0.0"
                }
            },
            "npm:bcrypt-pbkdf@1.0.1": {
                "map": {
                    "tweetnacl": "npm:tweetnacl@0.14.5"
                }
            },
            "npm:ecc-jsbn@0.1.1": {
                "map": {
                    "jsbn": "npm:jsbn@0.1.1"
                }
            },
            "npm:verror@1.3.6": {
                "map": {
                    "extsprintf": "npm:extsprintf@1.0.2"
                }
            },
            "npm:commander@2.9.0": {
                "map": {
                    "graceful-readlink": "npm:graceful-readlink@1.0.1"
                }
            },
            "npm:dashdash@1.14.1": {
                "map": {
                    "assert-plus": "npm:assert-plus@1.0.0"
                }
            },
            "npm:babel-core@6.25.0": {
                "map": {
                    "babel-traverse": "npm:babel-traverse@6.25.0",
                    "babel-runtime": "npm:babel-runtime@6.23.0",
                    "minimatch": "npm:minimatch@3.0.4",
                    "path-is-absolute": "npm:path-is-absolute@1.0.1",
                    "babel-template": "npm:babel-template@6.25.0",
                    "lodash": "npm:lodash@4.17.4",
                    "source-map": "npm:source-map@0.5.6",
                    "babel-types": "npm:babel-types@6.25.0",
                    "babylon": "npm:babylon@6.17.4",
                    "slash": "npm:slash@1.0.0",
                    "debug": "npm:debug@2.6.8",
                    "private": "npm:private@0.1.7",
                    "convert-source-map": "npm:convert-source-map@1.5.0",
                    "babel-messages": "npm:babel-messages@6.23.0",
                    "babel-helpers": "npm:babel-helpers@6.24.1",
                    "json5": "npm:json5@0.5.1",
                    "babel-code-frame": "npm:babel-code-frame@6.22.0",
                    "babel-register": "npm:babel-register@6.24.1",
                    "babel-generator": "npm:babel-generator@6.25.0"
                }
            },
            "npm:stream-browserify@2.0.1": {
                "map": {
                    "inherits": "npm:inherits@2.0.3",
                    "readable-stream": "npm:readable-stream@2.3.3"
                }
            },
            "npm:babel-traverse@6.25.0": {
                "map": {
                    "babel-runtime": "npm:babel-runtime@6.23.0",
                    "lodash": "npm:lodash@4.17.4",
                    "babel-types": "npm:babel-types@6.25.0",
                    "babylon": "npm:babylon@6.17.4",
                    "invariant": "npm:invariant@2.2.2",
                    "debug": "npm:debug@2.6.8",
                    "globals": "npm:globals@9.18.0",
                    "babel-messages": "npm:babel-messages@6.23.0",
                    "babel-code-frame": "npm:babel-code-frame@6.22.0"
                }
            },
            "npm:source-map@0.1.32": {
                "map": {
                    "amdefine": "npm:amdefine@1.0.1"
                }
            },
            "npm:cliui@2.1.0": {
                "map": {
                    "wordwrap": "npm:wordwrap@0.0.2",
                    "center-align": "npm:center-align@0.1.3",
                    "right-align": "npm:right-align@0.1.3"
                }
            },
            "npm:normalize-path@2.1.1": {
                "map": {
                    "remove-trailing-separator": "npm:remove-trailing-separator@1.0.2"
                }
            },
            "npm:regex-cache@0.4.3": {
                "map": {
                    "is-equal-shallow": "npm:is-equal-shallow@0.1.3",
                    "is-primitive": "npm:is-primitive@2.0.0"
                }
            },
            "npm:babel-types@6.25.0": {
                "map": {
                    "babel-runtime": "npm:babel-runtime@6.23.0",
                    "lodash": "npm:lodash@4.17.4",
                    "to-fast-properties": "npm:to-fast-properties@1.0.3",
                    "esutils": "npm:esutils@2.0.2"
                }
            },
            "npm:braces@1.8.5": {
                "map": {
                    "preserve": "npm:preserve@0.2.0",
                    "expand-range": "npm:expand-range@1.8.2",
                    "repeat-element": "npm:repeat-element@1.1.2"
                }
            },
            "npm:global-prefix@0.1.5": {
                "map": {
                    "which": "npm:which@1.2.14",
                    "homedir-polyfill": "npm:homedir-polyfill@1.0.1",
                    "is-windows": "npm:is-windows@0.2.0",
                    "ini": "npm:ini@1.3.4"
                }
            },
            "npm:es5-ext@0.10.24": {
                "map": {
                    "es6-iterator": "npm:es6-iterator@2.0.1",
                    "es6-symbol": "npm:es6-symbol@3.1.1"
                }
            },
            "npm:ajv@4.11.8": {
                "map": {
                    "json-stable-stringify": "npm:json-stable-stringify@1.0.1",
                    "co": "npm:co@4.6.0"
                }
            },
            "npm:expand-brackets@0.1.5": {
                "map": {
                    "is-posix-bracket": "npm:is-posix-bracket@0.1.1"
                }
            },
            "npm:kind-of@3.2.2": {
                "map": {
                    "is-buffer": "npm:is-buffer@1.1.5"
                }
            },
            "npm:is-equal-shallow@0.1.3": {
                "map": {
                    "is-primitive": "npm:is-primitive@2.0.0"
                }
            },
            "npm:arr-diff@2.0.0": {
                "map": {
                    "arr-flatten": "npm:arr-flatten@1.1.0"
                }
            },
            "npm:for-own@1.0.0": {
                "map": {
                    "for-in": "npm:for-in@1.0.2"
                }
            },
            "npm:for-own@0.1.5": {
                "map": {
                    "for-in": "npm:for-in@1.0.2"
                }
            },
            "npm:glob-base@0.3.0": {
                "map": {
                    "is-glob": "npm:is-glob@2.0.1",
                    "glob-parent": "npm:glob-parent@2.0.0"
                }
            },
            "npm:d@1.0.0": {
                "map": {
                    "es5-ext": "npm:es5-ext@0.10.24"
                }
            },
            "npm:es6-iterator@2.0.1": {
                "map": {
                    "d": "npm:d@1.0.0",
                    "es5-ext": "npm:es5-ext@0.10.24",
                    "es6-symbol": "npm:es6-symbol@3.1.1"
                }
            },
            "npm:es6-symbol@3.1.1": {
                "map": {
                    "d": "npm:d@1.0.0",
                    "es5-ext": "npm:es5-ext@0.10.24"
                }
            },
            "npm:center-align@0.1.3": {
                "map": {
                    "align-text": "npm:align-text@0.1.4",
                    "lazy-cache": "npm:lazy-cache@1.0.4"
                }
            },
            "npm:right-align@0.1.3": {
                "map": {
                    "align-text": "npm:align-text@0.1.4"
                }
            },
            "npm:jspm-nodelibs-url@0.2.1": {
                "map": {
                    "url": "npm:url@0.11.0"
                }
            },
            "npm:jspm-nodelibs-http@0.2.0": {
                "map": {
                    "http-browserify": "npm:stream-http@2.7.2"
                }
            },
            "npm:readable-stream@2.3.3": {
                "map": {
                    "inherits": "npm:inherits@2.0.3",
                    "isarray": "npm:isarray@1.0.0",
                    "safe-buffer": "npm:safe-buffer@5.1.1",
                    "core-util-is": "npm:core-util-is@1.0.2",
                    "process-nextick-args": "npm:process-nextick-args@1.0.7",
                    "string_decoder": "npm:string_decoder@1.0.3",
                    "util-deprecate": "npm:util-deprecate@1.0.2"
                }
            },
            "npm:is-relative@0.2.1": {
                "map": {
                    "is-unc-path": "npm:is-unc-path@0.1.2"
                }
            },
            "npm:jspm-nodelibs-crypto@0.2.1": {
                "map": {
                    "crypto-browserify": "npm:crypto-browserify@3.11.1"
                }
            },
            "npm:align-text@0.1.4": {
                "map": {
                    "kind-of": "npm:kind-of@3.2.2",
                    "longest": "npm:longest@1.0.1",
                    "repeat-string": "npm:repeat-string@1.6.1"
                }
            },
            "npm:stream-http@2.7.2": {
                "map": {
                    "inherits": "npm:inherits@2.0.3",
                    "readable-stream": "npm:readable-stream@2.3.3",
                    "to-arraybuffer": "npm:to-arraybuffer@1.0.1",
                    "xtend": "npm:xtend@4.0.1",
                    "builtin-status-codes": "npm:builtin-status-codes@3.0.0"
                }
            },
            "npm:glob-parent@2.0.0": {
                "map": {
                    "is-glob": "npm:is-glob@2.0.1"
                }
            },
            "npm:json-stable-stringify@1.0.1": {
                "map": {
                    "jsonify": "npm:jsonify@0.0.0"
                }
            },
            "npm:invariant@2.2.2": {
                "map": {
                    "loose-envify": "npm:loose-envify@1.3.1"
                }
            },
            "npm:url@0.11.0": {
                "map": {
                    "punycode": "npm:punycode@1.3.2",
                    "querystring": "npm:querystring@0.2.0"
                }
            },
            "npm:jspm-nodelibs-zlib@0.2.3": {
                "map": {
                    "browserify-zlib": "npm:browserify-zlib@0.1.4"
                }
            },
            "npm:crypto-browserify@3.11.1": {
                "map": {
                    "inherits": "npm:inherits@2.0.3",
                    "create-hash": "npm:create-hash@1.1.3",
                    "public-encrypt": "npm:public-encrypt@4.0.0",
                    "diffie-hellman": "npm:diffie-hellman@5.0.2",
                    "browserify-sign": "npm:browserify-sign@4.0.4",
                    "create-ecdh": "npm:create-ecdh@4.0.0",
                    "create-hmac": "npm:create-hmac@1.1.6",
                    "pbkdf2": "npm:pbkdf2@3.0.12",
                    "browserify-cipher": "npm:browserify-cipher@1.0.0",
                    "randombytes": "npm:randombytes@2.0.5"
                }
            },
            "npm:jspm-nodelibs-string_decoder@0.2.1": {
                "map": {
                    "string_decoder": "npm:string_decoder@0.10.31"
                }
            },
            "npm:expand-range@1.8.2": {
                "map": {
                    "fill-range": "npm:fill-range@2.2.3"
                }
            },
            "npm:babel-messages@6.23.0": {
                "map": {
                    "babel-runtime": "npm:babel-runtime@6.23.0"
                }
            },
            "npm:babel-helpers@6.24.1": {
                "map": {
                    "babel-runtime": "npm:babel-runtime@6.23.0",
                    "babel-template": "npm:babel-template@6.25.0"
                }
            },
            "npm:babel-code-frame@6.22.0": {
                "map": {
                    "chalk": "npm:chalk@1.1.3",
                    "esutils": "npm:esutils@2.0.2",
                    "js-tokens": "npm:js-tokens@3.0.2"
                }
            },
            "npm:babel-register@6.24.1": {
                "map": {
                    "babel-runtime": "npm:babel-runtime@6.23.0",
                    "core-js": "npm:core-js@2.4.1",
                    "mkdirp": "npm:mkdirp@0.5.1",
                    "babel-core": "npm:babel-core@6.25.0",
                    "lodash": "npm:lodash@4.17.4",
                    "source-map-support": "npm:source-map-support@0.4.15",
                    "home-or-tmp": "npm:home-or-tmp@2.0.0"
                }
            },
            "npm:string_decoder@1.0.3": {
                "map": {
                    "safe-buffer": "npm:safe-buffer@5.1.1"
                }
            },
            "npm:fill-range@2.2.3": {
                "map": {
                    "isobject": "npm:isobject@2.1.0",
                    "repeat-element": "npm:repeat-element@1.1.2",
                    "repeat-string": "npm:repeat-string@1.6.1",
                    "is-number": "npm:is-number@2.1.0",
                    "randomatic": "npm:randomatic@1.1.7"
                }
            },
            "npm:debug@2.6.8": {
                "map": {
                    "ms": "npm:ms@2.0.0"
                }
            },
            "npm:babel-generator@6.25.0": {
                "map": {
                    "babel-runtime": "npm:babel-runtime@6.23.0",
                    "babel-messages": "npm:babel-messages@6.23.0",
                    "babel-types": "npm:babel-types@6.25.0",
                    "lodash": "npm:lodash@4.17.4",
                    "source-map": "npm:source-map@0.5.6",
                    "trim-right": "npm:trim-right@1.0.1",
                    "detect-indent": "npm:detect-indent@4.0.0",
                    "jsesc": "npm:jsesc@1.3.0"
                }
            },
            "npm:is-unc-path@0.1.2": {
                "map": {
                    "unc-path-regex": "npm:unc-path-regex@0.1.2"
                }
            },
            "npm:jspm-nodelibs-buffer@0.2.3": {
                "map": {
                    "buffer": "npm:buffer@5.0.6"
                }
            },
            "npm:jspm-nodelibs-os@0.2.2": {
                "map": {
                    "os-browserify": "npm:os-browserify@0.3.0"
                }
            },
            "npm:browserify-zlib@0.1.4": {
                "map": {
                    "readable-stream": "npm:readable-stream@2.3.3",
                    "pako": "npm:pako@0.2.9"
                }
            },
            "npm:loose-envify@1.3.1": {
                "map": {
                    "js-tokens": "npm:js-tokens@3.0.2"
                }
            },
            "npm:create-hash@1.1.3": {
                "map": {
                    "inherits": "npm:inherits@2.0.3",
                    "ripemd160": "npm:ripemd160@2.0.1",
                    "sha.js": "npm:sha.js@2.4.8",
                    "cipher-base": "npm:cipher-base@1.0.4"
                }
            },
            "npm:public-encrypt@4.0.0": {
                "map": {
                    "create-hash": "npm:create-hash@1.1.3",
                    "randombytes": "npm:randombytes@2.0.5",
                    "parse-asn1": "npm:parse-asn1@5.1.0",
                    "browserify-rsa": "npm:browserify-rsa@4.0.1",
                    "bn.js": "npm:bn.js@4.11.7"
                }
            },
            "npm:home-or-tmp@2.0.0": {
                "map": {
                    "os-homedir": "npm:os-homedir@1.0.2",
                    "os-tmpdir": "npm:os-tmpdir@1.0.2"
                }
            },
            "npm:randombytes@2.0.5": {
                "map": {
                    "safe-buffer": "npm:safe-buffer@5.1.1"
                }
            },
            "npm:create-hmac@1.1.6": {
                "map": {
                    "inherits": "npm:inherits@2.0.3",
                    "safe-buffer": "npm:safe-buffer@5.1.1",
                    "create-hash": "npm:create-hash@1.1.3",
                    "ripemd160": "npm:ripemd160@2.0.1",
                    "sha.js": "npm:sha.js@2.4.8",
                    "cipher-base": "npm:cipher-base@1.0.4"
                }
            },
            "npm:browserify-sign@4.0.4": {
                "map": {
                    "create-hmac": "npm:create-hmac@1.1.6",
                    "inherits": "npm:inherits@2.0.3",
                    "create-hash": "npm:create-hash@1.1.3",
                    "parse-asn1": "npm:parse-asn1@5.1.0",
                    "browserify-rsa": "npm:browserify-rsa@4.0.1",
                    "elliptic": "npm:elliptic@6.4.0",
                    "bn.js": "npm:bn.js@4.11.7"
                }
            },
            "npm:diffie-hellman@5.0.2": {
                "map": {
                    "randombytes": "npm:randombytes@2.0.5",
                    "miller-rabin": "npm:miller-rabin@4.0.0",
                    "bn.js": "npm:bn.js@4.11.7"
                }
            },
            "npm:randomatic@1.1.7": {
                "map": {
                    "is-number": "npm:is-number@3.0.0",
                    "kind-of": "npm:kind-of@4.0.0"
                }
            },
            "npm:is-number@2.1.0": {
                "map": {
                    "kind-of": "npm:kind-of@3.2.2"
                }
            },
            "npm:pbkdf2@3.0.12": {
                "map": {
                    "create-hash": "npm:create-hash@1.1.3",
                    "safe-buffer": "npm:safe-buffer@5.1.1",
                    "create-hmac": "npm:create-hmac@1.1.6",
                    "ripemd160": "npm:ripemd160@2.0.1",
                    "sha.js": "npm:sha.js@2.4.8"
                }
            },
            "npm:browserify-cipher@1.0.0": {
                "map": {
                    "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
                    "browserify-des": "npm:browserify-des@1.0.0",
                    "browserify-aes": "npm:browserify-aes@1.0.6"
                }
            },
            "npm:is-number@3.0.0": {
                "map": {
                    "kind-of": "npm:kind-of@3.2.2"
                }
            },
            "npm:kind-of@4.0.0": {
                "map": {
                    "is-buffer": "npm:is-buffer@1.1.5"
                }
            },
            "npm:buffer@5.0.6": {
                "map": {
                    "ieee754": "npm:ieee754@1.1.8",
                    "base64-js": "npm:base64-js@1.2.1"
                }
            },
            "npm:detect-indent@4.0.0": {
                "map": {
                    "repeating": "npm:repeating@2.0.1"
                }
            },
            "npm:cipher-base@1.0.4": {
                "map": {
                    "inherits": "npm:inherits@2.0.3",
                    "safe-buffer": "npm:safe-buffer@5.1.1"
                }
            },
            "npm:sha.js@2.4.8": {
                "map": {
                    "inherits": "npm:inherits@2.0.3"
                }
            },
            "npm:parse-asn1@5.1.0": {
                "map": {
                    "create-hash": "npm:create-hash@1.1.3",
                    "pbkdf2": "npm:pbkdf2@3.0.12",
                    "browserify-aes": "npm:browserify-aes@1.0.6",
                    "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
                    "asn1.js": "npm:asn1.js@4.9.1"
                }
            },
            "npm:ripemd160@2.0.1": {
                "map": {
                    "inherits": "npm:inherits@2.0.3",
                    "hash-base": "npm:hash-base@2.0.2"
                }
            },
            "npm:browserify-rsa@4.0.1": {
                "map": {
                    "randombytes": "npm:randombytes@2.0.5",
                    "bn.js": "npm:bn.js@4.11.7"
                }
            },
            "npm:browserify-aes@1.0.6": {
                "map": {
                    "create-hash": "npm:create-hash@1.1.3",
                    "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
                    "inherits": "npm:inherits@2.0.3",
                    "cipher-base": "npm:cipher-base@1.0.4",
                    "buffer-xor": "npm:buffer-xor@1.0.3"
                }
            },
            "npm:browserify-des@1.0.0": {
                "map": {
                    "inherits": "npm:inherits@2.0.3",
                    "cipher-base": "npm:cipher-base@1.0.4",
                    "des.js": "npm:des.js@1.0.0"
                }
            },
            "npm:evp_bytestokey@1.0.0": {
                "map": {
                    "create-hash": "npm:create-hash@1.1.3"
                }
            },
            "npm:create-ecdh@4.0.0": {
                "map": {
                    "elliptic": "npm:elliptic@6.4.0",
                    "bn.js": "npm:bn.js@4.11.7"
                }
            },
            "npm:miller-rabin@4.0.0": {
                "map": {
                    "bn.js": "npm:bn.js@4.11.7",
                    "brorand": "npm:brorand@1.1.0"
                }
            },
            "npm:repeating@2.0.1": {
                "map": {
                    "is-finite": "npm:is-finite@1.0.2"
                }
            },
            "npm:elliptic@6.4.0": {
                "map": {
                    "inherits": "npm:inherits@2.0.3",
                    "bn.js": "npm:bn.js@4.11.7",
                    "brorand": "npm:brorand@1.1.0",
                    "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
                    "hmac-drbg": "npm:hmac-drbg@1.0.1",
                    "minimalistic-crypto-utils": "npm:minimalistic-crypto-utils@1.0.1",
                    "hash.js": "npm:hash.js@1.1.3"
                }
            },
            "npm:asn1.js@4.9.1": {
                "map": {
                    "inherits": "npm:inherits@2.0.3",
                    "bn.js": "npm:bn.js@4.11.7",
                    "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
                }
            },
            "npm:hash-base@2.0.2": {
                "map": {
                    "inherits": "npm:inherits@2.0.3"
                }
            },
            "npm:des.js@1.0.0": {
                "map": {
                    "inherits": "npm:inherits@2.0.3",
                    "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
                }
            },
            "npm:is-finite@1.0.2": {
                "map": {
                    "number-is-nan": "npm:number-is-nan@1.0.1"
                }
            },
            "npm:hash.js@1.1.3": {
                "map": {
                    "inherits": "npm:inherits@2.0.3",
                    "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
                }
            },
            "npm:hmac-drbg@1.0.1": {
                "map": {
                    "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
                    "minimalistic-crypto-utils": "npm:minimalistic-crypto-utils@1.0.1",
                    "hash.js": "npm:hash.js@1.1.3"
                }
            },
            "npm:jspm-nodelibs-punycode@0.2.1": {
                "map": {
                    "punycode": "npm:punycode@1.4.1"
                }
            },
            "npm:jspm-nodelibs-domain@0.2.1": {
                "map": {
                    "domain-browser": "npm:domain-browser@1.1.7"
                }
            },
            "npm:jspm-nodelibs-timers@0.2.1": {
                "map": {
                    "timers-browserify": "npm:timers-browserify@1.4.2"
                }
            },
            "npm:timers-browserify@1.4.2": {
                "map": {
                    "process": "npm:process@0.11.10"
                }
            }
        }
    },
    transpiler: "plugin-babel",
    babelOptions: {
        plugins: [
            "babel-plugin-dolittle-constructors"
        ]
    },
    packages: {
        "app": {
            "main": "app.js",
            "meta": {
                "*.js": {
                    "loader": "plugin-babel",
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
        "assert": "npm:jspm-nodelibs-assert@0.2.1",
        "chai": "npm:chai@4.1.0",
        "fs": "npm:jspm-nodelibs-fs@0.2.1",
        "path": "npm:jspm-nodelibs-path@0.2.3",
        "process": "npm:jspm-nodelibs-process@0.2.1",
        "require-dir": "npm:require-dir@0.3.2",
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
