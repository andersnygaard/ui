/*---------------------------------------------------------------------------------------------
 *  Copyright (c) 2008-2017 doLittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { Tasks } from "./Tasks";
import { TaskResult } from "./TaskResult";
import { TaskResults } from "./TaskResults";
import { TaskContext } from "./TaskContext";

const _children = new WeakMap();
const _results = new WeakMap();

/**
 * Represents the base for a task
 */
export class Task {
    /**
     * Initializes a new instance of a {Task}
     */
    constructor() {
        _children.set(this, new Tasks());
        _results.set(this, new TaskResults());
    }

    /**
     * Get any child tasks
     * @returns {Tasks} Tasks
     */
    get children() {
        return _children.get(this);
    }

    /**
     * Get the results 
     * @returns {TaskResult[]} Array of errors in the form of strings
     */
    get results() {
        return _results.get(this);
    }

    /**
     * Execute the task
     * @param {TaskContext} taskContext The context in which the task is running in
     */
    execute(taskContext) { }
}