/*---------------------------------------------------------------------------------------------
 *  Copyright (c) 2008-2017 doLittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import {TaskResult} from "./TaskResult";
import {taskResultSeverity} from "./taskResultSeverity";

const _results = new WeakMap();

 /**
  * Represents a set of {TaskResult}s
  */
export class TaskResults
{
    /**
     * Initializes a new instance of {TaskResults}
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
     * Add a result with {taskResultSeverity.info}
     * @param {Task} task The task associated with the result
     * @param {String} message Message related to the result
     */
    info(task, message) {
        _results.get(this).push(new TaskResult(task, message, taskResultSeverity.info));
    }

    /**
     * Add a result with {taskResultSeverity.warning}
     * @param {Task} task The task associated with the result
     * @param {String} message Message related to the result
     */
    warning(task, message) {
        _results.get(this).push(new TaskResult(task, message, taskResultSeverity.warning));
    }

    /**
     * Add a result with {taskResultSeverity.error}
     * @param {Task} task The task associated with the result
     * @param {String} message Message related to the result
     */
    error(task, message) {
        _results.get(this).push(new TaskResult(task, message, taskResultSeverity.error));
    }

    /**
     * Add a result with {taskResultSeverity.fatal}
     * @param {Task} task The taskn associated with the result
     * @param {String} message Message related to the result
     */
    fatal(task, message) {
        _results.get(this).push(new TaskResult(task, message, taskResultSeverity.fatal));
    }
}