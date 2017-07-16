/*---------------------------------------------------------------------------------------------
 *  Copyright (c) 2008-2017 doLittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import {Task} from "doLittle/tasks/Task";

 /**
 * Defines the base for a visitor that can visit elements in a document
 */
export class ElementVisitor
{
    /**
     * Visit an element and append any tasks related to the element
     * @param {HTMLElement} element The element to visit
     * @returns {(Task[]|undefined)} Either an array of {Task}s or undefined
     */
    visit(element) {}
}