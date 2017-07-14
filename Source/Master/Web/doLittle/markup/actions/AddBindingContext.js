/*---------------------------------------------------------------------------------------------
 *  Copyright (c) 2008-2017 doLittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import {Action} from "../Action";

const _element = new WeakMap();

/**
 * Represents an implementation of {Action} for adding binding context
 */
export class AddBindingContext extends Action
{
    /**
     * Initializes a new instance of {AddBindingContext}
     * @param {HTMLElement} element Element that will be associated with the binding context
     */
    constructor(element) {
        super();
        _element.set(this, element);
    }

    /** @inheritdoc */
    perform() {

    }
}