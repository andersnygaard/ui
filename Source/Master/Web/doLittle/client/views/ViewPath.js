/*---------------------------------------------------------------------------------------------
 *  Copyright (c) 2008-2017 doLittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { View } from "./View";

const _path = new WeakMap();


/**
 * Represents a path to a {View}
 */
export class ViewPath {

    /**
     * Initializes a new instance of {ViewPath}
     * @param {string} path Path of the view
     */
    constructor(path) {
        _path.set(this, path);
    }

    /**
     * Get the path of the {View}
     * @returns string
     */
    get path() {
        return _path.get(this);
    }

    /**
     * Gets a unique identifier for the {ViewPath}
     * @returns string
     */
    get identifier() {
        return _path.get(this);
    }
}