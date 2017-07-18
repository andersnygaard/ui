/*---------------------------------------------------------------------------------------------
 *  Copyright (c) 2008-2017 doLittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { Task } from "doLittle/tasks/Task";
import { ViewLoader } from "./ViewLoader";
import { ViewPath } from "./ViewPath";

const _viewLoader = new WeakMap();
const _viewPath = new WeakMap();

/**
 * Represents a {Task} that is capable of loading views
 */
export class LoadView extends Task {

    /**
     * Initializes a new instance of {LoadView}
     * @param {ViewLoader} viewLoader The loader for loading views
     * @param {ViewPath} viewPath The path of the view to load
     */
    constructor(viewLoader, viewPath) {
        super();
        
        _viewLoader.set(this, viewLoader);
        _viewPath.set(this, viewPath);
    }

    /** @inheritdoc */
    execute(taskContext) {
        _viewLoader.get(this).load(_viewPath.get(this)).then(viewDefinition => {
            taskContext.values.viewDefinition = viewDefinition;
        });       
    }
}