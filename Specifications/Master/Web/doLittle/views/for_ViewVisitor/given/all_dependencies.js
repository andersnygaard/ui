import sinon from "sinon";

export default class {
    constructor() {
        this.actions = {
            append: sinon.stub()
        };

        this.regionManager = {

        };

        this.bindingContextManager = {
            hasParent: sinon.stub(),
            getParent: sinon.stub(),
            createFor: sinon.stub()
        };
    }
}