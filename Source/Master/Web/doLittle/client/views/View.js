/*---------------------------------------------------------------------------------------------
 *  Copyright (c) 2008-2017 doLittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { ViewDefinition } from "./ViewDefinition";
import { ViewModel } from "./ViewModel";
import { Region } from "./Region";

const _definition = new WeakMap();
const _elements = new WeakMap();
const _viewModel = new WeakMap();

/**
 * Represents an instance of a {View} associated with its document elements and its {ViewModel}
 */
export class View {

    /**
     * Initializes a new instance of {ViewInstance}
     * @param {Region} region
     * @param {ViewDefinition} definition 
     * @param {HTMLElement[]} elements 
     * @param {ViewModel} viewModel 
     */
    constructor(region, definition, elements, viewModel) {
        _definition.set(this, view);
        _elements.set(this, elements);
        _viewModel.set(this, viewModel);
    }

    /**
     * Gets the {View} definition
     * @returns {ViewDefinition}
     */
    get definiton() {
        return _definition.get(this);
    }

    /**
     * Gets the elements for the view
     * @returns {HTMLElement[]}
     */
    get elements() {
        return _elements.get(this);
    }

    /**
     * Gets the {ViewModel} instance for the {View}
     * @returns {ViewModel}
     */
    get viewModel() {
        return _viewModel.get(this);
    }
}