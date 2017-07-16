/*---------------------------------------------------------------------------------------------
 *  Copyright (c) 2008-2017 doLittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
const _values = new WeakMap();
const _tasks = new WeakMap();
const _parent = new WeakMap();

let createValuesOrInheritParent = (parentContext) => {
    let values = {};
    if (parentContext) {
        let valuesFunction = function () { };
        valuesFunction.prototype = parentContext.values;
        values = new valuesFunction;
    }
    return values;
}

export class TaskContext {
    /**
     * Initializes a new instance of {TaskContext}
     * @param {TaskContext} [parentContext] The parent context, if any
     */
    constructor(parentContext) {
        _parent.set(this, parentContext);
        _values.set(this, createValuesOrInheritParent(parentContext));
        _tasks.set(this, []);
    }

    /**
     * Get the parent {TaskContext}
     * @returns {TaskContext}
     */
    get parent() {
        return _parent.get(this);
    }

    /**
     * Check if {TaskContext} has parent or not
     * @returns {Boolean} - true if it has, false if not
     */
    get hasParent() {
        let parent = _parent.get(this);
        return parent != null && typeof parent != "undefined";
    }

    /**
     * Get values assoicated with task context
     * @returns {Object}
     */
    get values() {
        return _values.get(this);
    }
}