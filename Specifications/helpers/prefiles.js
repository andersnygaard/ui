console.log("Prefiles");


sinon = require("sinon");
var chai = require("chai");

var util = chai.util;
var used = [];
exports.use = function (fn) {
  if (!~used.indexOf(fn)) {
    fn(exports, util);
    used.push(fn);
  }

  return exports;
};

exports.use(chai.expect);
exports.use(chai.should);
exports.use(chai.assert);

require("../../temp.js");