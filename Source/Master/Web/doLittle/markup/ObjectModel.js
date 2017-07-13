/*---------------------------------------------------------------------------------------------
 *  Copyright (c) 2008-2017 doLittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
const _document = new WeakMap();
const _elementVisitors = new WeakMap();
const _actionsFactory = new WeakMap();

/**
 * System that represents the object model found in an application
 */
export class ObjectModel
{
    /**
     * Initializes a new instance of {ObjectModel}
     * @param {*} document Document to use
     * @param {*} elementVisitors ElementVisitors to use for visiting
     * @param {*} actionsFactory ActionsFactory to use for creating actions collections
     */
    constructor(document, elementVisitors, actionsFactory) {
        _document.set(this, document);
        _elementVisitors.set(this, elementVisitors);
        _actionsFactory.set(this, actionsFactory);
    }

    /**
     * Handle object model for given element - recursively through children
     * @param {HTMLElement} element Element to handle for
     * @param {*} [actions] Actions that get aggregated 
     */
    handle(element, actions) {
        if( !actions ) actions = _actionsFactory.get(this).create();
        
        _elementVisitors.get(this).visit(element, actions);

        for( let elementIndex=0; elementIndex<element.children.length; elementIndex++ ) {
            let child = element.children[elementIndex];
            this.handle(child, actions);
        }
    }

    /**
     * Initialize based on current document from the body
     */
    initialize() {
        this.handle(_document.get(this).body);
    }
}