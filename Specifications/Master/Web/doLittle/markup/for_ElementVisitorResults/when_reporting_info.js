import Context from "./given/an_empty_element_visitor_results";
import {elementVisitorResultSeverity} from "doLittle/markup/elementVisitorResultSeverity";

const message = "Message to report";

describe("when reporting info", () => {
    let context = new Context();
    context.results.info(message);

    it("should have a results with the message on it", () => context.results.results[0].message.should.equal(message));
    it("should have a results with info severity on it", () => context.results.results[0].severity.should.equal(elementVisitorResultSeverity.info));
});