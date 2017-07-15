/*---------------------------------------------------------------------------------------------
 *  Copyright (c) 2008-2017 doLittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

 const _children = new WeakMap();
 const _errors = new WeakMap();

/**
 * Represents the base for a task
 */
export class Task 
{
    /**
     * Initializes a new instance of a {Task}
     */
    constructor() {
        _children.set(this, []);
        _errors.set(this, []);
    }

    /**
     * Get any child tasks
     * @returns {Task[]} Tasks
     */
    get children() {
        return _children.get(this);
    }

    /**
     * Get any errors
     * @returns {String[]} Array of errors in the form of strings
     */
    get errors() {
        return _errors.get(this);
    }

    /**
     * Execute the task
     */
    execute() { }

    /**
     * Report error during execution
     * @param {String} error 
     */
    reportError(error) {
        _errors.get(this).push(error);
    }

    /**
     * Add a child task to the task
     * @param {Task} child 
     */
    addChild(child) {
        _children.get(this).push(child);
    }
}