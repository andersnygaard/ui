import {TaskResult} from "doLittle/tasks/TaskResult";
import {taskResultSeverity} from "doLittle/tasks/taskResultSeverity";

const task = {my: "task"};
const message = "A message";
const severity = taskResultSeverity.error;

describe("when initializing with message and severity", () => {
    let result = new TaskResult(task, message, severity);

    it("should set the task", () => result.task.should.equal(task));
    it("should set the message", () => result.message.should.equal(message));
    it("should set the severity", () => result.severity.should.equal(severity));
});