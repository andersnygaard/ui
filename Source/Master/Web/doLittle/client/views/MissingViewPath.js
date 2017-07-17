/*---------------------------------------------------------------------------------------------
 *  Copyright (c) 2008-2017 doLittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { Exception } from "doLittle/exceptions/Exception";

/**
 * Exception that gets thrown if a <view/> element is missing the path attribute
 */
export class MissingViewPath extends Exception {
    constructor(element) {
        super("View element is missing the path");
    }
}