/*---------------------------------------------------------------------------------------------
 *  Copyright (c) 2008-2017 doLittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

const _parent = new WeakMap();
const _children = new WeakMap();

/**
 * Represents the context in which everything is bound relative to
 */
export class BindingContext {
    /**
     * Initializes a new instance of {BindingContext}
     * @param {BindingContext} [parent] Parent binding context, if any
     */
    constructor(parent) {
        _parent.set(this, parent);
        _children.set(this, []);
    }

    /**
     * Get all child {BindingContext}s
     * @returns {BindingContext[]}
     */
    get children() {
        return _children.get(this);
    }

    /**
     * Gets wether or not {BindingContext} has a parent
     * @returns {Boolean}
     */
    get hasParent() {
        let parent = _parent.get(this);
        return typeof parent !== "undefined" && parent !== null;

    }

    /**
     * Gets the parent of the {BindingContext}
     * @returns {BindingContext}
     */
    get parent() {
        return _parent.get(this);
    }
}