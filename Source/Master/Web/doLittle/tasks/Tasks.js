/*---------------------------------------------------------------------------------------------
 *  Copyright (c) 2008-2017 doLittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import {Task} from "./Task";

const _tasks = new WeakMap();

/**
 * Represents a collection of {Task}s
 */
export class Tasks
{
    /**
     * Initializes a new instance of {Tasks}
     */
    constructor() {
        _tasks.set(this, []);
    }

    /**
     * Get all the tasks in the collection. Worth noting that this is a shallow copy of the array.
     * @returns {Task[]}
     */
    get all() {
        return _tasks.get(this).slice();
    }

    /**
     * Append a task to the collection
     * @param {*} task 
     */
    append(task) {
        _tasks.get(this).push(task);
    }
}