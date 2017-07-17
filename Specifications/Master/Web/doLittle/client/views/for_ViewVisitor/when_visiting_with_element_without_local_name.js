import Context from "./given/a_view_visitor";

describe("when visiting without local name", () => {
    let context = null;
    const element = { 
        
    };
    let actions = {
        append: sinon.stub(),
    };

    beforeEach(() => {
        context = new Context();
        (becauseOf => context.visitor.visit(element, actions))();
    });

    it("should not append any action", () => actions.append.called.should.be.false);
});