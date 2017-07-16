/*---------------------------------------------------------------------------------------------
 *  Copyright (c) 2008-2017 doLittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import {Task} from "./Task";
import {taskResultSeverity} from "./taskResultSeverity";

const _task = new WeakMap();
const _message = new WeakMap();
const _severity = new WeakMap();

 /**
  * Represents results coming out of an {Task}
  */
export class TaskResult
{
    /**
     * Initializes a new instance of {TaskResult}
     * @param {Task} task Associated task
     * @param {String} message Associated message
     * @param {ElementVisitorResultSeverity} severity The severity of the result
     */
    constructor(task, message, severity) {
        _task.set(this, task);
        _message.set(this, message);
        _severity.set(this, severity);
    }

    /**
     * Gets the {Task} associated with the result
     * @returns {Task}
     */
    get task() {
        return _task.get(this);
    }

    /**
     * Gets the message assoicated with the result
     * @returns {String}
     */
    get message() {
        return _message.get(this);
    }

    /**
     * Gets the severity of the result
     * @returns {ElementVisitorResultSeverity}
     */
    get severity() {
        return _severity.get(this);
    }
}