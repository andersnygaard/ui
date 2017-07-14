/*---------------------------------------------------------------------------------------------
 *  Copyright (c) 2008-2017 doLittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import {Action} from "../Action";

const _element = new WeakMap();

/**
 * Represents an implementation of {Action} for adding region
 */
export class AddRegion extends Action
{
    /**
     * Initializes a new instance of {AddBinding}
     * @param {HTMLElement} element Element that represents the region boundary
     */
    constructor(element) {
        super();
        _element.set(this, element);
    }

    /** @inheritdoc */
    perform() {

    }
}