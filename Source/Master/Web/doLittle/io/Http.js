/*---------------------------------------------------------------------------------------------
 *  Copyright (c) 2008-2017 doLittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

/**
 * Represents an abstraction for doing HTTP calls
 */
export class Http
{
    /**
     * Perform a HTTP Get operation
     * @param {String} url 
     * @param {String} mimeType 
     */
    get(url, mimeType) {
        let promise = new Promise((resolve, reject) => {
            let request = new XMLHttpRequest();
            request.open("GET", url);
            request.onload = () => {
                resolve(request.responseText);

            };
            request.overrideMimeType(mimeType);
            request.send();
        });
        return promise;
    }

}