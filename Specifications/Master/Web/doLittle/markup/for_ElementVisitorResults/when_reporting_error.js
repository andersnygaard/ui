import Context from "./given/an_empty_element_visitor_results";
import {elementVisitorResultSeverity} from "doLittle/markup/elementVisitorResultSeverity";

const message = "Message to report";

describe("when reporting warning", () => {
    let context = new Context();
    context.results.error(message);

    it("should have a results with the message on it", () => context.results.results[0].message.should.equal(message));
    it("should have a results with error severity on it", () => context.results.results[0].severity.should.equal(elementVisitorResultSeverity.error));
});