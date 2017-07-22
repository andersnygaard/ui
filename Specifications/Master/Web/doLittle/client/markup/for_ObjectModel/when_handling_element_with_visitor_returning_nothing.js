import Context from "./given/an_object_model";

describe("when handling element with visitor returning nothing", () => {
    let element = {
        children: [
        ]
    };

    let resultingTasks = [];

    beforeEach(() => {
        let context = new Context();
        context.taskExecutor.execute.callsFake(tasks => {
            resultingTasks = tasks.all;
        });

        context.elementVisitors.visit.callsFake(() => [undefined]);

        (becauseOf => context.objectModel.handle(element))();
    });

    it("should not add 'undefined' task to tasks", () => resultingTasks.length.should.equal(0));
});