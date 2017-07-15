/*---------------------------------------------------------------------------------------------
 *  Copyright (c) 2008-2017 doLittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import {ElementVisitorResults} from "./ElementVisitorResults";

// TODO: Look into having a convention that understands <type>Factory and automatically
// injects a factory that is capable of creating these.

/**
 * Represents a factory that is capable of creating {ElementVisitorResults}
 */
export class ElementVisitorResultsFactory
{
    /**
     * Create an instance of {ElementVisitorResults}
     * @return New instance of {ElementVisitorResults}
     */
    create() {
        return new ElementVisitorResults();
    }
}