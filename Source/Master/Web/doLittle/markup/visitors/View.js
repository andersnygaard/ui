/*---------------------------------------------------------------------------------------------
 *  Copyright (c) 2008-2017 doLittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import {ElementVisitor} from "../ElementVisitor";
import {ActionFactory} from "../ActionFactory";

const _actionFactory = new WeakMap();

/**
 * Represents a {ElementVisitor} for dealing with views
 */
export class View extends ElementVisitor
{
    /**
     * Initializes a new instance of {View}
     * @param {ActionFactory} actionFactory The action factory
     */
    constructor(actionFactory) {
        super();
        _actionFactory.set(this, actionFactory);
    }

    /** @inheritdoc */
    visit(element, actions) {
        if( !element.localName || element.localName !== "view") return;

        let actionFactory = _actionFactory.get(this);
        let addBindingContext = actionFactory.addBindingContext(element);
        let addRegion = actionFactory.addRegion(element);
        
        actions.append(addBindingContext);
        actions.append(addRegion);
    }
}