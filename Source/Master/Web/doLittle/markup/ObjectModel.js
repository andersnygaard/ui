/*---------------------------------------------------------------------------------------------
 *  Copyright (c) 2008-2017 doLittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { ActionContext } from "doLittle/actions/ActionContext";
import { ActionContextFactory } from "doLittle/actions/ActionContextFactory";
import { ActionsPerformer } from "doLittle/actions/ActionsPerformer";
import { Document } from "./Document";
import { ElementVisitors } from "./ElementVisitors";

const _document = new WeakMap();
const _elementVisitors = new WeakMap();
const _actionContextFactory = new WeakMap();
const _actionsPerformer = new WeakMap();

let _handle = (elementVisitors, element, actionContext) => {
    elementVisitors.visit(element, actionContext);

    for (let elementIndex = 0; elementIndex < element.children.length; elementIndex++) {
        let child = element.children[elementIndex];
        _handle(elementVisitors, child, actionContext);
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
     * @param {ActionContextFactory} actionContextFactory Factory for creating {ActionContext}
     * @param {ActionsPerformer} actionsPerformer ActionsPerformer to use for performing actions
     */
    constructor(document, 
                elementVisitors, 
                actionContextFactory,
                actionsPerformer) {
        _document.set(this, document);
        _elementVisitors.set(this, elementVisitors);
        _actionContextFactory.set(this, actionContextFactory);
        _actionsPerformer.set(this, actionsPerformer);
    }

    /**
     * Handle object model for given element - recursively through children
     * @param {HTMLElement} element Element to handle for
     */
    handle(element) {
        let actionContext = _actionContextFactory.get(this).create();
        let elementVisitors = _elementVisitors.get(this)
        _handle(elementVisitors, element, actionContext);
        _actionsPerformer.get(this).perform(actionContext);
    }

    /**
     * Initialize based on current document from the body
     */
    initialize() {
        this.handle(_document.get(this).body);
    }
}