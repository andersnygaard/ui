/*---------------------------------------------------------------------------------------------
 *  Copyright (c) 2008-2017 doLittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { ViewRenderer } from "doLittle/client/views/ViewRenderer";
import { Task } from "doLittle/tasks/Task";

/**
 * Represents a Task that is capable of rendering a view
 */
export class RenderView extends Task {

    constructor(viewRenderer, viewDefinition) {
        super();

    }

    /** @inheritdoc */
    execute(taskContext) {
    }
}