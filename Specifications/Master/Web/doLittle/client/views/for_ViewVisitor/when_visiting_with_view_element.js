import Context from "./given/a_view_visitor";
import {CreateRegion} from "doLittle/client/views/CreateRegion";
import {CreateBindingContext} from "doLittle/client/values/CreateBindingContext";

describe("when visiting with non view element", () => {
    let context = null;
    const element = { 
        localName : "view",
        attributes: {
            getNamedItem: sinon.stub().returns("something")
        }
    };
    let tasks = null;

    beforeEach(() => {
        context = new Context();
        (becauseOf => tasks = context.visitor.visit(element, context.tasks, context.results))();
    });

    it("should add a create region task", () => tasks.some(action => action instanceof CreateRegion).should.be.true);
    it("should add a create binding context task", () => tasks.some(action => action instanceof CreateBindingContext).should.be.true);

    /*
    it("should create a new binding context for the element", () => context.actionFactory.addBindingContext.calledWith(element).should.be.true);
    it("should create a new region for the element", () => context.actionFactory.addBindingContext.calledWith(element).should.be.true);
    it("should append binding context action to actions", () => context.actions.append.calledWith(context.bindingContextAction).should.be.true);
    it("should append region action to actions", () => context.actions.append.calledWith(context.regionAction).should.be.true);*/
});