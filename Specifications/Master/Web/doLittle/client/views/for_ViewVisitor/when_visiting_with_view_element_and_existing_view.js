import { ViewPath } from "doLittle/client/views/ViewPath";
import Context from "./given/a_view_visitor";
import { CreateRegion } from "doLittle/client/views/CreateRegion";
import { CreateBindingContext } from "doLittle/client/values/CreateBindingContext";
import { RenderView } from "doLittle/client/views/RenderView";
import { LoadView } from "doLittle/client/views/LoadView";

describe("when visiting with view element and existing view", () => {
    let context = null;
    const pathToView = {
        value: "something"
    };
    
    const element = {
        localName: "view",
        attributes: {
            getNamedItem: sinon.stub().returns(pathToView)
        }
    };
    let tasks = null;
    let viewDefinition = {my:"viewDefinition"};

    beforeEach(() => {
        context = new Context();
        context.viewDefinitionManager.getFor.returns(viewDefinition);
        context.viewDefinitionManager.exists.returns(true);
        (becauseOf => tasks = context.visitor.visit(element, context.tasks, context.results))();
    });

    it("should add a create region task", () => tasks.some(task => task instanceof CreateRegion).should.be.true);
    it("should add a create binding context task", () => tasks.some(task => task instanceof CreateBindingContext).should.be.true);
    it("should add a render view task", () => tasks.some(task => task instanceof RenderView).should.be.true)
    it("should not add a load view task", () => tasks.some(task => task instanceof LoadView).should.be.false)
    //it("should get the view definition for the view", () => context.viewDefinitionManager.getFor.called.should.be.true);
});