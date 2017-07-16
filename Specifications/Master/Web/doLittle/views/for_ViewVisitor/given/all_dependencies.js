import sinon from "sinon";

export default class {
    constructor() {
        this.actionsArray = [];
        this.actions = {
            append: sinon.stub().callsFake(action => this.actionsArray.push(action))
        };

        this.results = {
            error: sinon.stub()
        };

        this.regionManager = {

        };

        this.bindingContextManager = {
            hasParent: sinon.stub(),
            getParent: sinon.stub(),
            createFor: sinon.stub()
        };

        this.viewDefinitionManager = {
            exists: sinon.stub()
        }
    }
}