/*---------------------------------------------------------------------------------------------
 *  Copyright (c) 2008-2017 doLittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import {Action} from "./Action";
import {actionResultSeverity} from "./actionResultSeverity";

const _action = new WeakMap();
const _message = new WeakMap();
const _severity = new WeakMap();

 /**
  * Represents results coming out of an {Action}
  */
export class ActionResult
{
    /**
     * Initializes a new instance of {ActionResult}
     * @param {Action} action
     * @param {string} message 
     * @param {ElementVisitorResultSeverity} severity 
     */
    constructor(action, message, severity) {
        _action.set(this, action);
        _message.set(this, message);
        _severity.set(this, severity);
    }

    /**
     * Gets the action associated with the result
     * @returns {Action}
     */
    get action() {
        return _action.get(this);
    }

    /**
     * Gets the message assoicated with the result
     * @returns {String}
     */
    get message() {
        return _message.get(this);
    }

    /**
     * Gets the severity of the result
     * @returns {ElementVisitorResultSeverity}
     */
    get severity() {
        return _severity.get(this);
    }
}