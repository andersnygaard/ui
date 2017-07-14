/*---------------------------------------------------------------------------------------------
 *  Copyright (c) 2008-2017 doLittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import {AddBindingContext} from "./actions/AddBindingContext";
import {AddRegion} from "./actions/AddRegion";

/**
 * Represents a factory for creating specific {Action} instances
 */
export class ActionFactory
{
    /**
     * Create a {AddBindingContext} {Action}
     * @param {HTMLElement} element 
     * @returns {AddBindingContext}
     */
    addBindingContext(element) {
        return new AddBindingContext(element);
    }

    /**
     * Create a {AddRegion} {Action}
     * @param {HTMLElement} element 
     * @returns {AddRegion}
     */
    addRegion(element) {
        return new AddRegion(element);
    }
}