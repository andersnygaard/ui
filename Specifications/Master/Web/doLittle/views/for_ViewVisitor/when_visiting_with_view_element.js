import Context from "./given/a_view_visitor";
import sinon from "sinon";

describe("when visiting with non view element", () => {
    let context = null;
    const element = { localName : "view" };

    beforeEach(() => {
        context = new Context();
        (becauseOf => context.visitor.visit(element, context.actions))();
    });

    /*
    it("should create a new binding context for the element", () => context.actionFactory.addBindingContext.calledWith(element).should.be.true);
    it("should create a new region for the element", () => context.actionFactory.addBindingContext.calledWith(element).should.be.true);
    it("should append binding context action to actions", () => context.actions.append.calledWith(context.bindingContextAction).should.be.true);
    it("should append region action to actions", () => context.actions.append.calledWith(context.regionAction).should.be.true);*/
});