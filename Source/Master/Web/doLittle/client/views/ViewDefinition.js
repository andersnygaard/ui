/*---------------------------------------------------------------------------------------------
 *  Copyright (c) 2008-2017 doLittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import {ViewModel} from "./ViewModel";
import {ViewPath} from "./ViewPath";
import {NullViewModel} from "./NullViewModel";

const _path = new WeakMap();
const _markup = new WeakMap();
const _viewModelType = new WeakMap();

/**
 * Represents a view
 */
export class ViewDefinition
{
    /**
     * Initializes a new instance of {View}
     * @param {ViewPath} path The path to the view
     * @param {String} markup The original markup representing the view
     * @param {Type} [viewModel] The viewModel associated with the view - optional.
     */
    constructor(path, markup, viewModelType) {
        _path.set(this, path);
        _markup.set(this, markup);
        _viewModelType.set(this, viewModelType || NullViewModel());
    }

    /**
     * Gets the {ViewPath} for the {View}
     * @returns {ViewPath}
     */
    get path() {
        return _path.get(this);
    }

    /**
     * Gets the markup for the {View}
     * @returns {String}
     */
    get markup() {
        return _markup.get(this);
    }
    
    /**
     * Gets the type of {ViewModel} associated with the view
     * @returns {function} 
     */
    get viewModelType() {
        return _viewModelType.get(this);
    }
}