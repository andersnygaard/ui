import { Task } from "doLittle/tasks/Task";
import { TaskExecutor } from "doLittle/tasks/TaskExecutor";

let executeCount = 0;

class MyTask extends Task {
    constructor() {
        super();
        this.execute = sinon.stub().callsFake(() => executeCount++);
    }
}

describe("when executing a task with two level hierarchy of children", () => {
    let topLevelTask = null;
    let firstLevelTask = null;
    let secondLevelTask = null;
    let taskRunner = null;
    let tasksDone = 0;

    beforeEach((done) => {
        taskRunner = new TaskExecutor();
        topLevelTask = new MyTask();
        firstLevelTask = new MyTask();
        secondLevelTask = new MyTask();

        topLevelTask.children.append(firstLevelTask);
        firstLevelTask.children.append(secondLevelTask);

        executeCount = 0;
        tasksDone = 0;

        (becauseOf => taskRunner.execute(topLevelTask).then(() => {
            tasksDone = executeCount;
            done();
        }))();
    });

    it("should execute top level task", () => topLevelTask.execute.called.should.be.true);
    it("should execute first level task", () => firstLevelTask.execute.called.should.be.true);
    it("should execute second level task", () => secondLevelTask.execute.called.should.be.true);
    it("should run all tasks prior to resolving promise", () => tasksDone.should.equal(3));
});