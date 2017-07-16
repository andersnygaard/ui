import { Task } from "doLittle/tasks/Task";
import { Tasks } from "doLittle/tasks/Tasks";
import { TaskExecutor } from "doLittle/tasks/TaskExecutor";

let executeCount = 0;

class MyTask extends Task {
    constructor() {
        super();
        this.execute = sinon.stub().callsFake(() => executeCount++);
    }
}

describe("when executing a collection of tasks", () => {
    let firstTask = null;
    let secondTask = null;
    let thirdTask = null;
    let taskRunner = null;
    let tasksDone = 0;
    let tasks = null; 

    beforeEach((done) => {
        tasks = new Tasks();
        taskRunner = new TaskExecutor();
        firstTask = new MyTask();
        secondTask = new MyTask();
        thirdTask = new MyTask();

        tasks.append(firstTask);
        tasks.append(secondTask);
        tasks.append(thirdTask);

        executeCount = 0;
        tasksDone = 0;

        (becauseOf => taskRunner.execute(tasks).then(() => {
            tasksDone = executeCount;
            done();
        }))();
    });

    it("should execute first task", () => firstTask.execute.called.should.be.true);
    it("should execute second task", () => secondTask.execute.called.should.be.true);
    it("should execute third task", () => thirdTask.execute.called.should.be.true);
    it("should run all tasks prior to resolving promise", () => tasksDone.should.equal(3));
});