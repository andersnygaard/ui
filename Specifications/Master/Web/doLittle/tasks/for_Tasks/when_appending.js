import {Tasks} from "doLittle/tasks/Tasks";

describe("when appending", () => {
    let task = {my:"task"};
    let tasks = new Tasks();
    (becauseOf => tasks.append(task))();

    it("should contain the task appended", () => tasks.all.should.contain(task));
});