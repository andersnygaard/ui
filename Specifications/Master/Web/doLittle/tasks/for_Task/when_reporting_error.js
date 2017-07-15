import {Task} from "doLittle/tasks/Task";

const errorToReport = "This is an error";

describe("when reporting error", () => {
    let task = null;

    beforeEach(() => {
        task = new Task();

        (becauseOf => task.reportError(errorToReport))();
    });

    it("should add the error to the errors", () => task.errors[0].should.equal(errorToReport));
});