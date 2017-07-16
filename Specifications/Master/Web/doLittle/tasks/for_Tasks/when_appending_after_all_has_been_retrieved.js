import {Tasks} from "doLittle/tasks/Tasks";

describe("when appending after all has been retrieved", () => {
    let firstTask = {my:"first task"};
    let secondTask = {my:"second task"};
    let tasks = new Tasks();
    tasks.append(firstTask);
    let all = tasks.all;
    (becauseOf => tasks.append(secondTask))();

    it("should contain the second task appended", () => all.should.not.contain(secondTask));
});