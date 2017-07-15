import {ElementVisitorResult} from "doLittle/markup/ElementVisitorResult";
import {elementVisitorResultSeverity} from "doLittle/markup/elementVisitorResultSeverity";

const message = "A message";
const severity = elementVisitorResultSeverity.error;

describe("when initializing with message and severity", () => {
    let result = new ElementVisitorResult(message, severity);

    it("should set the message", () => result.message.should.equal(message));
    it("should set the severity", () => result.severity.should.equal(severity));
});