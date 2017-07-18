/*---------------------------------------------------------------------------------------------
 *  Copyright (c) 2008-2017 doLittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import {View} from "./View";

const _definitions = new WeakMap();

/**
 * Represents a manager for dealing with {View}s
 */
export class ViewDefinitionManager
{
    /**
     * Initializes a new instance of {ViewManager}
     */
    constructor() {
        _definitions.set(this, {});
    }

    /**
     * Check if a view exists in the system or not
     * @param {ViewPath} viewPath The path of the view to check for
     */
    exists(viewPath) {
    }

    /**
     * Get a view based on the {ViewPath}
     * @param {ViewPath} viewPath The path of the view to get
     */
    getFrom(viewPath) {
    }

    /**
     * Get a view instance
     * @param {ViewPath} viewPath The path of the view to create
     */
    createFrom(viewPath) {
    }
}