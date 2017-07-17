/*---------------------------------------------------------------------------------------------
 *  Copyright (c) 2008-2017 doLittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { Task } from "doLittle/tasks/Task";
import { RegionManager } from "./RegionManager";

const _element = new WeakMap();
const _regionManager = new WeakMap();

/**
 * Represents a task that is capable of setting up a region for an {HTMLElement}
 */
export class CreateRegion extends Task {

    /**
     * Initializes a new instance of {CreateRegionAction}
     * @param {RegionManager} regionManager RegionManager to work with regions
     * @param {HTMLElement} element Element to set binding context for
     */
    constructor(regionManager, element) {
        super();
        _element.set(this, element);
        _regionManager.set(this, regionManager);
    }

    /** @inheritdoc */
    execute(taskContext) {

    }
}