/*---------------------------------------------------------------------------------------------
 *  Copyright (c) 2008-2017 doLittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import {ElementVisitor} from "./ElementVisitor";
import {Task} from "doLittle/tasks/Task";

const _visitors = new WeakMap();

/**
 * System for visiting all elements with all available instances of {ElementVisitor} available
 */
export class ElementVisitors {

    /**
     * @constructor
     * @param {ElementVisitor[]} instancesOfElementVisitor All instances of available {ElementVisitor}
     */
    constructor(instancesOfElementVisitor) {
        _visitors.set(this, instancesOfElementVisitor);
    }

    /**
     * Visit an element and append any tasks related to the element
     * @param {HTMLElement} element The element to visit
     * @returns {Task[]} Array of {Task}s
     */
    visit(element) {
        let tasks = [];
        _visitors.get(this).forEach(visitor => {
            tasks.concat(visitor.visit(element));
        });
        return tasks;
    }
}