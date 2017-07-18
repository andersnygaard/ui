import Context from "./given/a_view_visitor";
import { CreateRegion } from "doLittle/client/views/CreateRegion";
import { CreateBindingContext } from "doLittle/client/values/CreateBindingContext";
import { RenderView } from "doLittle/client/views/RenderView";
import { LoadView } from "doLittle/client/views/LoadView";

describe("when visiting with view element without existing view", () => {
    let context = null;
    const element = {
        localName: "view",
        attributes: {
            getNamedItem: sinon.stub().returns("something")
        }
    };
    let tasks = null;

    beforeEach(() => {
        context = new Context();
        context.viewDefinitionManager.exists.returns(false);
        (becauseOf => tasks = context.visitor.visit(element, context.tasks, context.results))();
    });

    it("should add a create region task", () => tasks.some(task => task instanceof CreateRegion).should.be.true);
    it("should add a create binding context task", () => tasks.some(task => task instanceof CreateBindingContext).should.be.true);
    it("should add a load view task", () => tasks.some(task => task instanceof LoadView).should.be.true)
    it("should add a render view task as child of the load task", () => tasks.filter(task => task instanceof LoadView)[0].children.all[0].should.be.instanceOf(RenderView));
});