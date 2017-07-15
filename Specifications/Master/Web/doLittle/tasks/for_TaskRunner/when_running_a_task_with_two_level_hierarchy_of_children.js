import { Task } from "doLittle/tasks/Task";
import { TaskRunner } from "doLittle/tasks/TaskRunner";

let executeCount = 0;

class MyTask extends Task {
    constructor() {
        super();
        this.execute = sinon.stub().callsFake(() => executeCount++);
    }
}

describe("when running a task with two level hierarchy of children", () => {
    let topLevelTask = null;
    let firstLevelTask = null;
    let secondLevelTask = null;
    let taskRunner = null;
    let tasksDone = 0;

    beforeEach(() => {
        taskRunner = new TaskRunner();
        topLevelTask = new MyTask();
        firstLevelTask = new MyTask();
        secondLevelTask = new MyTask();

        topLevelTask.addChild(firstLevelTask);
        firstLevelTask.addChild(secondLevelTask);

        executeCount = 0;
        tasksDone = 0;

        (becauseOf => taskRunner.run(topLevelTask).then(() => tasksDone = executeCount))();
    });

    it("should execute top level task", () => topLevelTask.execute.called.should.be.true);
    it("should execute first level task", () => firstLevelTask.execute.called.should.be.true);
    it("should execute second level task", () => secondLevelTask.execute.called.should.be.true);
    //it("should run all tasks prior to resolving promise", () => tasksDone.should.equal(3));
});