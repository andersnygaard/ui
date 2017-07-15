/*---------------------------------------------------------------------------------------------
 *  Copyright (c) 2008-2017 doLittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { Action } from "./Action";

const _actions = new WeakMap();

/**
 * Represents a set of {Action}s
 */
export class Actions {

    /**
     * Initializes a new instance of {Actions}
     */
    constructor() {
        _actions.set(this, []);
    }

    /**
     * Append an action
     * @param {Action} action Action to append
     */
    append(action) {
        _actions.get(this).push(action);
    }

    /**
     * Get all the actions
     * @returns {Action[]}
     */
    get actions() {
        return _actions.get(this);
    }
}