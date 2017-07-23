export default class {
    constructor() {
        this.taskContext = {
        };

        this.results = {
            error: sinon.stub()
        };

        this.regionManager = {
            my:"regionManager"
        };

        this.bindingContextManager = {
        };

        this.viewDefinitions = {
            getFor: sinon.stub(),
            exists: sinon.stub()
        };

        this.viewLoader = {
            my:"viewLoader"
        };
    }
}