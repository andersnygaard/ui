import Context from "./given/all_dependencies";
import {ObjectModel} from "doLittle/markup/ObjectModel";

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
        objectModel = new ObjectModel(context.document, context.elementVisitors, context.actionFactory);

        (becauseOf => objectModel.handle(element))();
    });

    it("should let element visitors visit top level element", () => context.elementVisitors.visit.calledWith(element, context.actions));
    it("should let element visitors visit first level element", () => context.elementVisitors.visit.calledWith(firstLevelChild, context.actions));
    it("should let element visitors visit second level element", () => context.elementVisitors.visit.calledWith(secondLevelChild, context.actions));
    it("should create actions once", () => context.actionFactory.create.calledOnce.should.be.true);
});