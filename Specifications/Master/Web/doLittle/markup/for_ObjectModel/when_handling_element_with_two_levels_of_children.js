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

    beforeEach(() => {
        context = new Context();
        (becauseOf => context.objectModel.handle(element))();
    });

    it("should let element visitors visit top level element", () => context.elementVisitors.visit.calledWith(element, context.actions, context.results).should.be.true);
    it("should let element visitors visit first level element", () => context.elementVisitors.visit.calledWith(firstLevelChild, context.actions, context.results).should.be.true);
    it("should let element visitors visit second level element", () => context.elementVisitors.visit.calledWith(secondLevelChild, context.actions, context.results).should.be.true);
    it("should create actions once", () => context.actionsFactory.create.calledOnce.should.be.true);
    it("should delegate actions to the actions performer", () => context.actionsPerformer.perform.calledWith(context.actions).should.be.true);
});