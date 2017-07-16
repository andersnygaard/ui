/*---------------------------------------------------------------------------------------------
 *  Copyright (c) 2008-2017 doLittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import {ActionResults} from "./ActionResults";

// TODO: Look into having a convention that understands <type>Factory and automatically
// injects a factory that is capable of creating these.

/**
 * Represents a factory that is capable of creating {ActionResults}
 */
export class ActionResultsFactory
{
    /**
     * Create an instance of {ActionResults}
     * @return New instance of {ActionResults}
     */
    create() {
        return new ActionResults();
    }
}