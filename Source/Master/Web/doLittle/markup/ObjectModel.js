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
        let elementVisitors = _elementVisitors.get(this);
        
        elementVisitors.visit(element, actions);

        for( let elementIndex=0; elementIndex<element.children.length; elementIndex++ ) {
            let child = element.children[elementIndex];
            elementVisitors.visit(child, actions);
            this.handle(child);
        }
    }

    initialize() {
        this.handle(_document.get(this).body);
    }
}