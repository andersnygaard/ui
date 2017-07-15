import {Task} from "doLittle/tasks/Task";

describe("when reporting error", () => {
    let task = null;
    let childTask = null;

    beforeEach(() => {
        task = new Task();
        childTask = new Task();

        (becauseOf => task.addChild(childTask))();
    });

    it("should add the child to the children", () => task.children[0].should.equal(childTask));
});