import Context from "./given/a_region_with_a_view";

describe("when adding task", () => {
    let context = new Context();
    let task = {};
    context.region.addTask(task);

    it("should register the task", () => context.region.tasks.should.contain(task));
});