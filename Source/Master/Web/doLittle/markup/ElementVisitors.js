
// IMPORTANT: This should be discovered by being able to take dependency to "instancesOfElementVisitor"
// the IOC will resolve it by convention and find implementations of it
// It will be a combination of a Babel plugin and IOC magic
import { View } from "./visitors/View"

const _visitors = new WeakMap();

export class ElementVisitors {
    constructor() {
        let visitors = [];
        visitors.push(new View());
        _visitors.set(this, visitors);
    }

    visit(element, actions) {
        _visitors.get(this).forEach(visitor => {
            visitor.visit(element, actions);
        });
    }
}