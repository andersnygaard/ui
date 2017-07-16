export default class
{
    constructor() {

        this.document = {};
        this.elementVisitors = {
            visit: sinon.stub()
        };
        this.results = {my:"results"};
        this.taskExecutor = {
            execute: sinon.stub()
        }
    }
}