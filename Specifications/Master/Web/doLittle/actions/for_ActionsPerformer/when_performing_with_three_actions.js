import sinon from "sinon";
import {ActionsPerformer} from "doLittle/actions/ActionsPerformer";

describe("when performing with three actions", () => {
    let firstAction = { perform: sinon.stub() };
    let secondAction = { perform: sinon.stub() };
    let thirdAction = { perform: sinon.stub() };
    let actionContext = {
        actions: [
            firstAction,
            secondAction,
            thirdAction
        ]
    };

    let performer = new ActionsPerformer();
    performer.perform(actionContext);

    it("should perform first action", () => firstAction.perform.called.should.be.true);
    it("should perform second action", () => secondAction.perform.called.should.be.true);
    it("should perform third action", () => thirdAction.perform.called.should.be.true);
});