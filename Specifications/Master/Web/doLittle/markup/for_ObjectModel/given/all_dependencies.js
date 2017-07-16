export default class
{
    constructor() {

        this.document = {};
        this.elementVisitors = {
            visit: sinon.stub()
        };
        this.actionContext = {my:"actionContext"};
        this.results = {my:"results"};
        this.actionContextFactory = {
            create: sinon.stub().returns(this.actionContext)
        };
        this.actionsPerformer = {
            perform: sinon.stub()
        }
    }
}