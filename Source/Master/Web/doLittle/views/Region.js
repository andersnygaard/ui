/*---------------------------------------------------------------------------------------------
 *  Copyright (c) 2008-2017 doLittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import {View} from "./View";
import {Task} from "doLittle/tasks/Task";

const _tasks = new WeakMap();

 /**
  * Represents a region
  */
export class Region {

    /**
     * Initializes a new instance of {Region}
     * @param {View} [view]
     */
    constructor(view) {
        _tasks.set(this, []);
    }

    /**
     * Gets any tasks running in the region
     * @returns {Tasks[]}
     */
    get tasks() {
        return _tasks.get(this);
    }

    /**
     * Add a task to the region
     * @param {Task} task Task to queue
     */
    addTask(task) {
        this.tasks.push(task);
    }

    /**
     * Remove a task from the region
     * @param {Task} task Task to queue
     */
    removeTask(task) {
        let index = this.tasks.indexOf(task);
        this.tasks.splice(index,1);
    }
}