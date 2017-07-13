/*---------------------------------------------------------------------------------------------
 *  Copyright (c) 2008-2017 doLittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import {Actions} from "./Actions";

// TODO: Look into having a convention that understands <type>Factory and automatically
// injects a factory that is capable of creating these.

/**
 * Represents a factory that is capable of creating {Actions}
 */
export class ActionsFactory
{
    /**
     * Create an instance of {Actions}
     * @return New instance of {Actions}
     */
    create() {
        return new Actions();
    }
}