/*---------------------------------------------------------------------------------------------
 *  Copyright (c) 2008-2017 doLittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
const _actions = new WeakMap();

export class Actions
{
    constructor() {
        _actions.set(this, []);
    }

    append(action) {
        _actions.get(this).push(action);
    }

    get actions() {
        return _actions.get(this);
    }
}