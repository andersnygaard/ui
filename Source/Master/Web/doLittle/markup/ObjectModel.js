/*---------------------------------------------------------------------------------------------
 *  Copyright (c) 2008-2017 doLittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
const _document = new WeakMap();
const _elementVisitors = new WeakMap();
const _actionFactory = new WeakMap();

export class ObjectModel
{
    constructor(document, elementVisitors, actionFactory) {
        _document.set(this, document);
        _elementVisitors.set(this, elementVisitors);
        _actionFactory.set(this, actionFactory);
    }

    handle(element, actions) {
        if( !actions ) actions = _actionFactory.get(this).create();
        
        _elementVisitors.get(this).visit(element, actions);

        for( let elementIndex=0; elementIndex<element.children.length; elementIndex++ ) {
            let child = element.children[elementIndex];
            this.handle(child, actions);
        }
    }

    initialize() {
        this.handle(_document.get(this).body);
    }
}