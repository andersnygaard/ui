/*---------------------------------------------------------------------------------------------
 *  Copyright (c) 2008-2017 doLittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
const _visitors = new WeakMap();

export class ElementVisitors {
    constructor(instancesOfElementVisitor) {
        _visitors.set(this, instancesOfElementVisitor);
    }

    visit(element, actions) {
        _visitors.get(this).forEach(visitor => {
            visitor.visit(element, actions);
        });
    }
}