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
        };

        this.viewDefinitionManager = {
            getFor: sinon.stub(),
            exists: sinon.stub()
        }
    }
}