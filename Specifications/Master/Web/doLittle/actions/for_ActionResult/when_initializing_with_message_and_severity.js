import {ActionResult} from "doLittle/actions/ActionResult";
import {actionResultSeverity} from "doLittle/actions/actionResultSeverity";

const action = {my: "action"};
const message = "A message";
const severity = actionResultSeverity.error;

describe("when initializing with message and severity", () => {
    let result = new ActionResult(action, message, severity);

    it("should set the action", () => result.action.should.equal(action));
    it("should set the message", () => result.message.should.equal(message));
    it("should set the severity", () => result.severity.should.equal(severity));
});