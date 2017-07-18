/*---------------------------------------------------------------------------------------------
 *  Copyright (c) 2008-2017 doLittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { BindingContextManager } from "doLittle/client/values/BindingContextManager";
import { Task } from "doLittle/tasks/Task";

const _bindingContextManager = new WeakMap();
const _element = new WeakMap();

/**
 * Represents an {Action} that creates a new binding context from the element given and associates
 * it to the element
 */
export class CreateBindingContext extends Task {
    /**
     * Initializes a new instance of {CreateBindingContext}
     * @param {BindingContextManager} bindingContextManager The binding context manager to use for creation 
     * @param {HTMLElement} element The element in which the binding context is relative to
     */
    constructor(bindingContextManager, element) {
        super();
        _bindingContextManager.set(this, bindingContextManager);
        _element.set(this, element);
    }

    /** @inheritdoc */
    execute(taskContext) {
        let bindingContext = _bindingContextManager.get(this).createFor(_element.get(this));
        taskContext.values.bindingContext = bindingContext;
    }
}