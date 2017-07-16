import {TaskContext} from "doLittle/tasks/TaskContext";

describe("when creating with parent", () => {
    let parent = new TaskContext();
    parent.values.someValue = 42;
    let child = new TaskContext(parent);

    it("should have parent values accessible", () => child.values.someValue.should.equal(42));
    it("should set parent", () => child.parent.should.equal(parent));
    it("should consider itself having a parent", () => child.hasParent.should.be.true);
});