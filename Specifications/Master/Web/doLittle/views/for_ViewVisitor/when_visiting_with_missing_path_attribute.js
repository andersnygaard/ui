import sinon from "sinon";
import Context from "./given/a_view_visitor";

describe("when visiting with missing path attribute", () => {
    let context = new Context();
    let element = {
        localName: "view",
        attributes: {
            getNamedItem: sinon.stub().returns(null)
        }
    };
    let actions = {}
    let results = {
        error: sinon.stub()
    };

    context.visitor.visit(element, actions, results);

    it("should report an error", () => results.error.called.should.be.true);
});