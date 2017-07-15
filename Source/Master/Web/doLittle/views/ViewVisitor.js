/*---------------------------------------------------------------------------------------------
 *  Copyright (c) 2008-2017 doLittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import {ElementVisitor} from "doLittle/markup/ElementVisitor";
import {BindingContextManager} from "doLittle/values/BindingContextManager";
import {RegionManager} from "./RegionManager";

const _bindingContextManager = new WeakMap();
const _regionManager = new WeakMap();

/**
 * Represents a {ElementVisitor} for dealing with views
 */
export class ViewVisitor extends ElementVisitor
{
    /**
     * Initializes a new instance of {ViewVisitor}
     */
    constructor(bindingContextManager, regionManager) {
        super();
        _bindingContextManager.set(this, bindingContextManager);
        _regionManager.set(this, regionManager);
    }

    /** @inheritdoc */
    visit(element, actions, results) {
        if( element.localName !== "view") return;

        let pathAttribute = element.attributes.getNamedItem("path");
        if( !pathAttribute || pathAttribute.value == "" ) {
            results.error("Missing path attribute");
            return;
        }
        
        // Get attribute - validate if it is there - if it is not, we need to report an error

        let bindingContextManager = _bindingContextManager.get(this);
        let parent = null;
        if( bindingContextManager.hasParent(element) ) parent = bindingContextManager.getParent(element);
        let bindingContext = _bindingContextManager.createFor(element);

        let region = _regionManager.createFor(element);

        // Create a bindingContext
        // Create an implicit region
        // If view exists in viewDefinitionManager -> Render
        // If not - load it and then add a render action
    }
}