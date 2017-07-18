/*---------------------------------------------------------------------------------------------
 *  Copyright (c) 2008-2017 doLittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { ElementVisitor } from "doLittle/client/markup/ElementVisitor";
import { BindingContextManager } from "doLittle/client/values/BindingContextManager";
import { RegionManager } from "./RegionManager";
import { CreateRegion } from "./CreateRegion";
import { CreateBindingContext } from "doLittle/client/values/CreateBindingContext";
import { ViewDefinitionManager } from "./ViewDefinitionManager";
import { ViewDefinition } from "./ViewDefinition";
import { ViewPath } from "./ViewPath";
import { MissingViewPath } from "./MissingViewPath";
import { RenderView } from "./RenderView";
import { LoadView } from "./LoadView";

const _bindingContextManager = new WeakMap();
const _regionManager = new WeakMap();
const _viewDefinitionManager = new WeakMap();

/**
 * Represents a {ElementVisitor} for dealing with views
 */
export class ViewVisitor extends ElementVisitor {
    /**
     * Initializes a new instance of {ViewVisitor}
     * @param {BindingContextManager} bindingContextManager The manager for dealing with binding contexts
     * @param {RegionManager} regionManager The manager for dealing with regions
     * @param {ViewDefinitionManager} viewDefinitionManager The manager for dealing with {ViewDefinition}s
     */
    constructor(bindingContextManager, regionManager, viewDefinitionManager) {
        super();
        _bindingContextManager.set(this, bindingContextManager);
        _regionManager.set(this, regionManager);
        _viewDefinitionManager.set(this, viewDefinitionManager);
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

        let viewDefinitionManager = _viewDefinitionManager.get(this);
        let renderView = new RenderView();
        if (viewDefinitionManager.exists(viewPath)) {
            tasks.push(renderView);
        } else {
            let loadView = new LoadView();
            loadView.children.append(renderView);
            tasks.push(loadView);
        }

        return tasks;
        

        // Action Context
        // - All Actions gets the context passed in on perform
        // - All Actions can read and write to the context
        // - Actions can have children - parent needs to be done before children can execute

        // Action context should contain results
        // Actions return the ActionContext rather than getting it passed in




        /*actions.append(new CreateRegionAction(_regionManager.get(this), element));
        actions.append(new CreateBindingContextAction(_bindingContextManager.get(this), element));
        let viewDefinitionManager = _viewDefinitionManager.get(this);*/

    }
}