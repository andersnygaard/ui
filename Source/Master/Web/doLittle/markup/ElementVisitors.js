/*---------------------------------------------------------------------------------------------
 *  Copyright (c) 2008-2017 doLittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import {ElementVisitor} from "./ElementVisitor";
import {Actions} from "./Actions";
import {ELementVisitorResults} from "./ElementVisitorResults";

const _visitors = new WeakMap();

/**
 * System for visiting all elements with all available instances of {ElementVisitor} available
 */
export class ElementVisitors {

    /**
     * @constructor
     * @param {ElementVisitor[]} instancesOfElementVisitor All instances of available {ElementVisitor}
     */
    constructor(instancesOfElementVisitor) {
        _visitors.set(this, instancesOfElementVisitor);
    }

    /**
     * Visit an element and append any actions related to the element
     * @param {HTMLElement} element The element to visit
     * @param {Actions} actions The actions to append to
     * @param {ElementVisitorResults} results The results from the visit
     */
    visit(element, actions, results) {
        _visitors.get(this).forEach(visitor => {
            visitor.visit(element, actions, results);
        });
    }
}