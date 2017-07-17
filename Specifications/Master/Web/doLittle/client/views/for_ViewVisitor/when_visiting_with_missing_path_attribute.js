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

    context.visitor.visit(element, actions, context.results);

    //it("should report an error", () => context.results.error.called.should.be.true);
});