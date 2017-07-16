import Context from "./given/an_empty_task_results";
import {taskResultSeverity} from "doLittle/tasks/taskResultSeverity";

const task = {my:"task"};
const message = "Message to report";

describe("when reporting warning", () => {
    let context = new Context();
    context.results.error(task, message);

    it("should have a results with the task on it", () => context.results.results[0].task.should.equal(task));
    it("should have a results with the message on it", () => context.results.results[0].message.should.equal(message));
    it("should have a results with error severity on it", () => context.results.results[0].severity.should.equal(taskResultSeverity.error));
});