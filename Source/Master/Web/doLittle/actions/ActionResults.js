/*---------------------------------------------------------------------------------------------
 *  Copyright (c) 2008-2017 doLittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import {ActionResult} from "./ActionResult";
import {actionResultSeverity} from "./actionResultSeverity";

const _results = new WeakMap();

 /**
  * Represents a set of {ActionResult}s
  */
export class ActionResults
{
    /**
     * Initializes a new instance of {ActionResults}
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
     * Add a result with {actionResultSeverity.info}
     * @param {Action} action The action associated with the result
     * @param {String} message Message related to the result
     */
    info(action, message) {
        _results.get(this).push(new ActionResult(action, message, actionResultSeverity.info));
    }

    /**
     * Add a result with {elementVisitorResultSeverity.warning}
     * @param {Action} action The action associated with the result
     * @param {String} message Message related to the result
     */
    warning(action, message) {
        _results.get(this).push(new ActionResult(action, message, actionResultSeverity.warning));
    }

    /**
     * Add a result with {elementVisitorResultSeverity.error}
     * @param {Action} action The action associated with the result
     * @param {String} message Message related to the result
     */
    error(action, message) {
        _results.get(this).push(new ActionResult(action, message, actionResultSeverity.error));
    }

    /**
     * Add a result with {elementVisitorResultSeverity.fatal}
     * @param {Action} action The action associated with the result
     * @param {String} message Message related to the result
     */
    fatal(action, message) {
        _results.get(this).push(new ActionResult(action, message, actionResultSeverity.fatal));
    }
}