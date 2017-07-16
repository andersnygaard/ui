/*---------------------------------------------------------------------------------------------
 *  Copyright (c) 2008-2017 doLittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import {Action} from "./Action";
import {ActionContext} from "./ActionContext";

 /**
  * Represents a system that can perform tasks
  */
export class ActionsPerformer
{
    /**
     * Perform actions from a given {Actions}
     * @param {ActionContext} actionContext The {ActionContext} to perform all tasks within
     */
    perform(actionContext) {
        actionContext.actions.forEach(action => action.perform(actionContext));
    }
}