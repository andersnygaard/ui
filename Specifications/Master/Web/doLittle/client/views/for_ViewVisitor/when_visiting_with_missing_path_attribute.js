import Context from "./given/a_view_visitor";
import { MissingViewPath } from "doLittle/client/views/MissingViewPath";

describe("when visiting with missing path attribute", () => {
    let context = new Context();
    let element = {
        localName: "view",
        attributes: {
            getNamedItem: sinon.stub().returns(null)
        }
    };
    let actions = {}

    let exception = null;

    (becauseOf => {
        try { 
            context.visitor.visit(element, actions, context.results); 
        } catch( ex ) {
            exception = ex;
        }
    })();

    it("should throw missing view path", () => exception.should.be.instanceOf(MissingViewPath));
});