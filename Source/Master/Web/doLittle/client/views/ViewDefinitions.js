/*---------------------------------------------------------------------------------------------
 *  Copyright (c) 2008-2017 doLittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import {View} from "./View";
import {ViewPath} from "./ViewPath";
import {ViewDefinition} from "./ViewDefinition";
import {AssetsManager} from "doLittle/client/assets/AssetsManager";

const _definitions = new WeakMap();

/**
 * Represents a manager for dealing with {View}s
 */
export class ViewDefinitions
{
    /**
     * Initializes a new instance of {ViewManager}
     * @param {AssetsManager} assetsManager The manager of assets
     */
    constructor() {
        _definitions.set(this, {});
    }

    /**
     * Check if a view exists in the system or not
     * @param {ViewPath} viewPath The path of the view to check for
     */
    exists(viewPath) {
        return false;
    }

    /**
     * Get a view based on the {ViewPath}
     * @param {ViewPath} viewPath The path of the view to get
     */
    getFor(viewPath) {
        // Based on context (language, tenant, etc.. ) - resolve the desired view
        // If not desired view exists in assets, fallback
        
        // Similar for viewModel - resolve based on context. If there is a viewModel at all.
        
        // Associate these into ViewDefinition - if no ViewModel - use NullViewModel
    }

    register(viewDefinition) {

    }
}