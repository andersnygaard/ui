import Context from "./given/a_region_with_a_view";

describe("when removing added task", () => {
    let context = new Context();
    let task = {};
    context.region.addTask(task);
    context.region.removeTask(task);

    it("should remove the task", () => context.region.tasks.should.not.contain(task));
});