/*---------------------------------------------------------------------------------------------
 *  Copyright (c) 2008-2017 doLittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

const _children = new WeakMap();

/**
 * Represents the context in which everything is bound relative to
 */
export class BindingContext
{
    /**
     * Initializes a new instance of {BindingContext}
     */
    constructor() {
        _children.set(this, []);
    }

    /**
     * Get all child {BindingContext}s
     * @returns {BindingContext[]}
     */
    get children() {
        return _children.get(this);
    }
}