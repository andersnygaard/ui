/*---------------------------------------------------------------------------------------------
 *  Copyright (c) 2008-2017 doLittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import {Task} from "./Task";
import {Http} from "doLittle/io/Http";

const _url = new WeakMap();
const _mimeType = new WeakMap();
const _http = new WeakMap();

/**
 * Represents a Http task for GET operations
 */
export class HttpGetTask extends Task {

    /**
     * Initializes a new instance of {HttpGetTask}
     * @param {String} url Url for the destination
     * @param {String} mimeType MimeType for the response
     * @param {Http} http The {Http} helper for performing the operation
     */
    constructor(url, mimeType, http) {
        super();
        _url.set(this, url);
        _mimeType.set(this, mimeType);
        _http.set(this, http);
    }

    /** @inheritdoc */
    execute() {
        let promise = new Promise((resolve, reject) => {
            _http.get(this).get(_url.get(this), _mimeType.get(this)).then(resolve);
        });
        return promise;
    }
}