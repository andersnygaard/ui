import { Task } from "doLittle/tasks/Task";
import { TaskRunner } from "doLittle/tasks/TaskRunner";

class MyTask extends Task {
    execute() {
        let promise = new Promise(resolve => {
            resolve();
        });
        return promise;
    }
}

describe("when running an async task", () => {
    let task = null;
    let taskRunner = null;
    let done = false;

    beforeEach((resolve) => {
        task = new MyTask;
        taskRunner = new TaskRunner();

        done = false;
        (becauseOf => taskRunner.run(task).then(() => {
            done = true;
            resolve();
        }))();
    });

    it("should resolve", () => done.should.be.true);
});