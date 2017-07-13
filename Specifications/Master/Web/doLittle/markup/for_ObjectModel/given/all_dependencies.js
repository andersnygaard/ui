class Actions 
{
}

export default class
{
    constructor() {

        this.document = {};
        this.elementVisitors = {
            visit: sinon.stub()
        };
        this.actions = new Actions();
        this.actionFactory = {
            create: sinon.stub().returns(this.actions)
        };
    }
}