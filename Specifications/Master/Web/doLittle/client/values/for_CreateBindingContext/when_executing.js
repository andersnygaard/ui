import { CreateBindingContext } from "doLittle/client/values/CreateBindingContext";

describe("when executing", () => {
    let element = { my: "element" };
    let bindingContext = { my: "bindingContext" };
    let bindingContextManager = {
        createFor: sinon.stub().returns(bindingContext)
    };
    let createBindingContext = null;
    let taskContext = {
        values: {}
    };

    beforeEach(() => {
        let createBindingContext = new CreateBindingContext(bindingContextManager, element);
        (becauseOf => createBindingContext.execute(taskContext))();
    });

    it("should create binding context for element", () => bindingContextManager.createFor.calledWith(element).should.be.true);
    it("should set the binding context on the values of the task context", () => taskContext.values.bindingContext.should.equal(bindingContext));
})