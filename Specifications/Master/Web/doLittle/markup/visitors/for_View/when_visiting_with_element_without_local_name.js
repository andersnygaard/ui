import sinon from "sinon";
import {View} from "doLittle/markup/visitors/View";

describe("when visiting with non view element", () => {
    let view = null;
    const element = { };
    let actions = {
        append: sinon.stub()
    };

    beforeEach(() => {
        view = new View();
        (becauseOf => view.visit(element, actions))();
    });

    it("should not append any action", () => actions.append.called.should.be.false);
});