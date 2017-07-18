import { LoadView } from "doLittle/client/views/LoadView";

describe("when executing", () => {
    let viewPath = { my: "viewPath" };
    let viewDefinition = { my: "viewDefinition" };
    let viewLoader = {
        load: sinon.stub().callsFake(() => {
            return {
                then: (callback) => { 
                    callback(viewDefinition);
                }
            };
        })
    };
    let taskContext = {
        values: {}
    };
    let loadView = null;

    beforeEach(() => {
        loadView = new LoadView(viewLoader, viewPath);

        (becauseOf => loadView.execute(taskContext))();
    });

    it("should delegate loading to the view loader", () => viewLoader.load.calledWith(viewPath).should.be.true);
    it("should put the loaded view definition on the task context values", () => taskContext.values.viewDefinition.should.equal(viewDefinition));
});