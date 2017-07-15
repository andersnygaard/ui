export default class
{
    constructor() {

        this.document = {};
        this.elementVisitors = {
            visit: sinon.stub()
        };
        this.actions = {my:"actions"};
        this.results = {my:"results"};
        this.actionsFactory = {
            create: sinon.stub().returns(this.actions)
        };
        this.actionsPerformer = {
            perform: sinon.stub()
        }
        this.elementVisitorResultsFactory = {
            create: sinon.stub().returns(this.results)
        }
    }
}