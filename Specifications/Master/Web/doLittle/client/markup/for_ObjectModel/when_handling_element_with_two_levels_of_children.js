import Context from "./given/an_object_model";

describe("when handling element with two levels of children", () => {
    let context = null;
    let objectModel = null;

    let secondLevelChild = {
        children: []
    };

    let firstLevelChild = {
        children: [
            secondLevelChild
        ]
    };

    let element = {
        children: [
            firstLevelChild
        ]
    };
    let firstTask = {my:"firstTask"};
    let secondTask = {my:"secondTask"};
    let thirdTask = {my:"thirdTask"};

    let resultingTasks = [];

    beforeEach(() => {
        context = new Context();
        context.taskExecutor.execute.callsFake(tasks => {
            resultingTasks = tasks.all;
        });
        context.elementVisitors.visit.withArgs(element).returns([firstTask]);
        context.elementVisitors.visit.withArgs(firstLevelChild).returns([secondTask]);
        context.elementVisitors.visit.withArgs(secondLevelChild).returns([thirdTask]);
        (becauseOf => context.objectModel.handle(element))();
    });

    it("should let element visitors visit top level element", () => context.elementVisitors.visit.calledWith(element).should.be.true);
    it("should let element visitors visit first level element", () => context.elementVisitors.visit.calledWith(firstLevelChild).should.be.true);
    it("should let element visitors visit second level element", () => context.elementVisitors.visit.calledWith(secondLevelChild).should.be.true);
    it("should delegate actions to the task executor", () => context.taskExecutor.execute.called.should.be.true);
    it("should have the task for the first element visiting when executing the executor",() => resultingTasks.should.contain(firstTask));
    it("should have the task for the second element visiting when executing the executor",() => resultingTasks.should.contain(secondTask));
    it("should have the task for the third element visiting when executing the executor",() => resultingTasks.should.contain(thirdTask));
});