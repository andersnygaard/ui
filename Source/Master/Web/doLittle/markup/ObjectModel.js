import {Actions} from "./Actions";

const _document = new WeakMap();
const _elementVisitors = new WeakMap();

export class ObjectModel
{
    constructor(document, elementVisitors) {
        _document.set(this, document);
        _elementVisitors.set(this, elementVisitors);
    }

    handle(element) {
        let actions = new Actions();
        _elementVisitors.get(this).visit(element, actions)
    }

    initialize() {
        this.handle(_document.get(this).body);
    }
}