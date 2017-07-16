import Context from "./given/a_view_visitor";
import sinon from "sinon";
import {CreateRegionAction} from "doLittle/views/CreateRegionAction";
import {CreateBindingContextAction} from "doLittle/values/CreateBindingContextAction";

describe("when visiting with non view element", () => {
    let context = null;
    const element = { 
        localName : "view",
        attributes: {
            getNamedItem: sinon.stub().returns("something")
        }
    };

    beforeEach(() => {
        context = new Context();
        (becauseOf => context.visitor.visit(element, context.actions, context.results))();
    });

    it("should add a create region action", () => context.actionsArray.some(action => action instanceof CreateRegionAction).should.be.true);
    it("should add a create binding context action", () => context.actionsArray.some(action => action instanceof CreateBindingContextAction).should.be.true);

    /*
    it("should create a new binding context for the element", () => context.actionFactory.addBindingContext.calledWith(element).should.be.true);
    it("should create a new region for the element", () => context.actionFactory.addBindingContext.calledWith(element).should.be.true);
    it("should append binding context action to actions", () => context.actions.append.calledWith(context.bindingContextAction).should.be.true);
    it("should append region action to actions", () => context.actions.append.calledWith(context.regionAction).should.be.true);*/
});