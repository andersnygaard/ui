/*---------------------------------------------------------------------------------------------
 *  Copyright (c) 2008-2017 doLittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

/**
 * Represents a wrapper for the Document in the browser
 */
export class Document
{
    /**
     * Get the body of the current document
     * @returns The body of the document
     */
    get body() {
        return document.body;
    }
}