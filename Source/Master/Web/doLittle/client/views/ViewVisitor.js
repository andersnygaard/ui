/*---------------------------------------------------------------------------------------------
     *  Copyright (c) 2008-2017 doLittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { ElementVisitor } from "doLittle/client/markup/ElementVisitor";
import { BindingContextManager } from "doLittle/client/values/BindingContextManager";
import { RegionManager } from "./RegionManager";
import { CreateRegion } from "./CreateRegion";
import { CreateBindingContext } from "doLittle/client/values/CreateBindingContext";
import { ViewDefinitions } from "./ViewDefinitions";
import { ViewDefinition } from "./ViewDefinition";
import { ViewPath } from "./ViewPath";
import { ViewLoader } from "./ViewLoader";
import { MissingViewPath } from "./MissingViewPath";
import { RenderView } from "./RenderView";
import { LoadAndRenderView } from "./LoadAndRenderView";

const _bindingContextManager = new WeakMap();
const _regionManager = new WeakMap();
const _viewDefinitions = new WeakMap();
const _viewLoader = new WeakMap();


/**
 * Represents a {ElementVisitor} for dealing with views
 */
export class ViewVisitor extends ElementVisitor {
    /**
     * Initializes a new instance of {ViewVisitor}
     * @param {BindingContextManager} bindingContextManager The manager for dealing with binding contexts
     * @param {RegionManager} regionManager The manager for dealing with regions
     * @param {ViewDefinitions} viewDefinitionManager The manager for dealing with {ViewDefinition}s
     * @param {ViewLoader} viewLoader The system that is capable of loading views
     */
    constructor(bindingContextManager, 
                regionManager, 
                viewDefinitions,
                viewLoader) {
        super();
        _bindingContextManager.set(this, bindingContextManager);
        _regionManager.set(this, regionManager);
        _viewDefinitions.set(this, viewDefinitions);
        _viewLoader.set(this, viewLoader);
    }

    /** @inheritdoc */
    visit(element, taskContext) {
        if (element.localName !== "view") return;

        let pathAttribute = element.attributes.getNamedItem("path");
        if (!pathAttribute || pathAttribute.value == "") {
            MissingViewPath.throw(element);
            return;
        }

        // TODO: Deal with URI locations / mappers - UriLocationMapper thingy
        let viewPath = new ViewPath(pathAttribute.value);

        let tasks = [];

        tasks.push(new CreateRegion(_regionManager.get(this), element))
        tasks.push(new CreateBindingContext(_bindingContextManager.get(this), element))

        let viewDefinitions = _viewDefinitions.get(this);
        
        if (viewDefinitions.exists(viewPath)) {
            let viewDefinition = viewDefinitions.getFor(viewPath);
            let renderView = new RenderView(viewDefinition);    
            tasks.push(renderView);
        } else {
            
            let loadView = new LoadAndRenderView(_viewLoader.get(this), viewPath);
            tasks.push(loadView);
        }

        return tasks;
    }
}