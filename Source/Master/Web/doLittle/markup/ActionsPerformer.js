/*---------------------------------------------------------------------------------------------
 *  Copyright (c) 2008-2017 doLittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import {Action} from "./Action";
import {Actions} from "./Actions";

 /**
  * Represents a system that can perform tasks
  */
export class ActionsPerformer
{
    /**
     * Perform actions from a given {Actions}
     * @param {Actions} actions Actions to perform
     */
    perform(actions) {
        actions.actions.forEach(action => action.perform());
    }
}