const _visitors = new WeakMap();

export class ElementVisitors {
    constructor(instancesOfElementVisitor) {
        _visitors.set(this, instancesOfElementVisitor);
    }

    visit(element, actions) {
        _visitors.get(this).forEach(visitor => {
            visitor.visit(element, actions);
        });
    }
}