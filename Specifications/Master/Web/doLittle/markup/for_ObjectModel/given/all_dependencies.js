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
        this.actionsFactory = {
            create: sinon.stub().returns(this.actions)
        };
    }
}