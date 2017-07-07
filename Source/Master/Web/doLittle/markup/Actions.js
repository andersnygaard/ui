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