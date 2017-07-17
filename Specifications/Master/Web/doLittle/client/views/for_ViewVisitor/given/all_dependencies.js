export default class {
    constructor() {
        this.taskContext = {
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