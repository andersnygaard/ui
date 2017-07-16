import { Task } from "doLittle/tasks/Task";
import { TaskExecutor } from "doLittle/tasks/TaskExecutor";

class MyTask extends Task {
    execute() {
        let promise = new Promise(resolve => {
            resolve();
        });
        return promise;
    }
}

describe("when executing an async task", () => {
    let task = null;
    let taskExecutor = null;
    let done = false;

    beforeEach((resolve) => {
        task = new MyTask;
        taskExecutor = new TaskExecutor();

        done = false;
        (becauseOf => taskExecutor.execute(task).then(() => {
            done = true;
            resolve();
        }))();
    });

    it("should resolve", () => done.should.be.true);
});