import {TaskContext} from "doLittle/tasks/TaskContext";

describe("when creating with parent", () => {
    let context = new TaskContext();

    it("should not consider itself having a parent", () => context.hasParent.should.be.false);
});