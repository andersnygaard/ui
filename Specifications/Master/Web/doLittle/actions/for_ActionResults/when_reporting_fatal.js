import Context from "./given/an_empty_action_results";
import {actionResultSeverity} from "doLittle/actions/actionResultSeverity";

const action = {my:"action"};
const message = "Message to report";

describe("when reporting warning", () => {
    let context = new Context();
    context.results.fatal(action, message);

    it("should have a results with the action on it", () => context.results.results[0].action.should.equal(action));
    it("should have a results with the message on it", () => context.results.results[0].message.should.equal(message));
    it("should have a results with fatal severity on it", () => context.results.results[0].severity.should.equal(actionResultSeverity.fatal));
});