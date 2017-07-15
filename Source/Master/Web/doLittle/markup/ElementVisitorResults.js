/*---------------------------------------------------------------------------------------------
 *  Copyright (c) 2008-2017 doLittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import {ElementVisitorResult} from "./ElementVisitorResult";
import {elementVisitorResultSeverity} from "./elementVisitorResultSeverity";

const _results = new WeakMap();

 /**
  * Represents a set of {ElementVisitorResult}s
  */
export class ElementVisitorResults
{
    /**
     * Initializes a new instance of {ElementVisitorResults}
     */
    constructor() {
        _results.set(this, []);
    }

    /**
     * Get all the results
     * @return {ElementVisitorResult[]}
     */
    get results() {
        return _results.get(this);
    }

    /**
     * Add a result with {elementVisitorResultSeverity.info}
     * @param {String} message Message related to the result
     */
    info(message) {
        _results.get(this).push(new ElementVisitorResult(message, elementVisitorResultSeverity.info));
    }

    /**
     * Add a result with {elementVisitorResultSeverity.warning}
     * @param {String} message Message related to the result
     */
    warning(message) {
        _results.get(this).push(new ElementVisitorResult(message, elementVisitorResultSeverity.warning));
    }

    /**
     * Add a result with {elementVisitorResultSeverity.error}
     * @param {String} message Message related to the result
     */
    error(message) {
        _results.get(this).push(new ElementVisitorResult(message, elementVisitorResultSeverity.error));
    }

    /**
     * Add a result with {elementVisitorResultSeverity.fatal}
     * @param {String} message Message related to the result
     */
    fatal(message) {
        _results.get(this).push(new ElementVisitorResult(message, elementVisitorResultSeverity.fatal));
    }
}