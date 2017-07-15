/*---------------------------------------------------------------------------------------------
 *  Copyright (c) 2008-2017 doLittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import {ElementVisitor} from "./ElementVisitor";
import {elementVisitorResultSeverity} from "./elementVisitorResultSeverity";

const _message = new WeakMap();
const _severity = new WeakMap();

 /**
  * Represents results coming out of an {ElementVisitor}
  */
export class ElementVisitorResult
{
    /**
     * 
     * @param {string} message 
     * @param {ElementVisitorResultSeverity} severity 
     */
    constructor(message, severity) {
        _message.set(this, message);
        _severity.set(this, severity);
    }

    /**
     * Gets the message assoicated with the results
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