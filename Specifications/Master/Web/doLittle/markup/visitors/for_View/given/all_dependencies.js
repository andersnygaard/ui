export default class {
    constructor() {
        this.bindingContextAction = {action:"bindingContext"};
        this.regionAction = {action:"region"};

        this.actions = {
            append: sinon.stub()
        };

        this.actionFactory = {
            addBindingContext: sinon.stub().returns(this.bindingContextAction),
            addRegion: sinon.stub().returns(this.regionAction)
        }
    }
}