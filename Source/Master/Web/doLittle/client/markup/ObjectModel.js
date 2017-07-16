/*---------------------------------------------------------------------------------------------
 *  Copyright (c) 2008-2017 doLittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { TaskContext } from "doLittle/tasks/TaskContext";
import { TaskExecutor } from "doLittle/tasks/TaskExecutor";
import { Tasks } from "doLittle/tasks/Tasks";
import { Document } from "./Document";
import { ElementVisitors } from "./ElementVisitors";

const _document = new WeakMap();
const _elementVisitors = new WeakMap();
const _taskContextFactory = new WeakMap();
const _taskExecutor = new WeakMap();

let _handle = (elementVisitors, element, tasks) => {
    let returnedTasks = elementVisitors.visit(element);
    if( returnedTasks ) returnedTasks.forEach(task => tasks.append(task));

    for (let elementIndex = 0; elementIndex < element.children.length; elementIndex++) {
        let child = element.children[elementIndex];
        _handle(elementVisitors, child, tasks);
    }
};

/**
 * System that represents the object model found in an application
 */
export class ObjectModel {
    /**
     * Initializes a new instance of {ObjectModel}
     * @param {Document} document Document to use
     * @param {ElementVisitors} elementVisitors ElementVisitors to use for visiting
     * @param {TaskExecutor} taskExecutor Executor for executing tasks
     */
    constructor(document, 
                elementVisitors, 
                taskExecutor) {
        _document.set(this, document);
        _elementVisitors.set(this, elementVisitors);
        _taskExecutor.set(this, taskExecutor);
    }

    /**
     * Handle object model for given element - recursively through children
     * @param {HTMLElement} element Element to handle for
     */
    handle(element) {
        let elementVisitors = _elementVisitors.get(this)
        let tasks = new Tasks();
        _handle(elementVisitors, element, tasks);
        _taskExecutor.get(this).execute(tasks);
    }

    /**
     * Initialize based on current document from the body
     */
    initialize() {
        this.handle(_document.get(this).body);
    }
}