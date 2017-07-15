/*---------------------------------------------------------------------------------------------
 *  Copyright (c) 2008-2017 doLittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import {View} from "./View";

const _views = new WeakMap();

/**
 * Represents a manager for dealing with {View}s
 */
export class ViewManager
{
    /**
     * Initializes a new instance of {ViewManager}
     */
    constructor() {
        _views.set(this, {});
    }

    /**
     * Check if a view exists in the system or not
     * @param {ViewPath} viewPath 
     */
    exists(viewPath) {
    }

    /**
     * Get a view instance
     * @param {ViewPath} viewPath
     */
    createFrom(viewPath) {
    }
}