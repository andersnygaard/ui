/*---------------------------------------------------------------------------------------------
 *  Copyright (c) 2008-2017 doLittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { Actions } from "./Actions";
import { ActionsFactory } from "./ActionsFactory";
import { Document } from "./Document";
import { ElementVisitors } from "./ElementVisitors";
import { ElementVisitorResults } from "./ElementVisitorResults";
import { ElementVisitorResultsFactory } from "./ElementVisitorResultsFactory";

const _document = new WeakMap();
const _elementVisitors = new WeakMap();
const _actionsFactory = new WeakMap();
const _elementVisitorResultsFactory = new WeakMap();

let _handle = (elementVisitors, element, actions, results) => {
    elementVisitors.visit(element, actions, results);

    for (let elementIndex = 0; elementIndex < element.children.length; elementIndex++) {
        let child = element.children[elementIndex];
        _handle(elementVisitors, child, actions, results);
    }
};


/**
 * System that represents the object model found in an application
 */
export class ObjectModel {
    /**
     * Initializes a new instance of {ObjectModel}
     * @param {Document} document Document to use
     * @param {ElementVisitors} elementVisitors ElementVisitors to use for visiting
     * @param {ActionsFactory} actionsFactory ActionsFactory to use for creating actions collections
     * @param {ElementVisitorResultsFactory} elementVisitorResultsFactory ElementVisitorResultsFactory to use for creating {ElementVisitorResults}
     */
    constructor(document, elementVisitors, actionsFactory, elementVisitorResultsFactory) {
        _document.set(this, document);
        _elementVisitors.set(this, elementVisitors);
        _actionsFactory.set(this, actionsFactory);
        _elementVisitorResultsFactory.set(this, elementVisitorResultsFactory);
    }

    /**
     * Handle object model for given element - recursively through children
     * @param {HTMLElement} element Element to handle for
     */
    handle(element) {
        let actions = _actionsFactory.get(this).create();
        let results = _elementVisitorResultsFactory.get(this).create();
        let elementVisitors = _elementVisitors.get(this)
        _handle(elementVisitors, element, actions, results);
    }

    /**
     * Initialize based on current document from the body
     */
    initialize() {
        this.handle(_document.get(this).body);
    }
}