/*---------------------------------------------------------------------------------------------
 *  Copyright (c) 2008-2017 doLittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import {Actions} from "./Actions";

/**
 * Defines the base for a visitor that can visit elements in a document
 */
export class ElementVisitor
{
    /**
     * Visit an element and append any actions related to the element
     * @param {HTMLElement} element The element to visit
     * @param {Actions} actions The actions to append to
     */
    visit(element, actions, results) {
    }
}