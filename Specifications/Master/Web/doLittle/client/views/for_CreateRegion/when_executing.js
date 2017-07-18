import { CreateRegion } from "doLittle/client/views/CreateRegion";

describe("when executing", () => {
    let element = {my: "element"};
    let region = {my: "region"};
    let regionManager = {
        createFor: sinon.stub().returns(region)
    };
    let taskContext = {
        values: {

        }
    }
    let createRegion = null;

    beforeEach(() => {
        createRegion = new CreateRegion(regionManager, element);

        (becauseOf => createRegion.execute(taskContext))();
    });

    it("should create a new region for the element", () => regionManager.createFor.calledWith(element).should.be.true);
    it("should set the region on the values", () => taskContext.values.region.should.equal(region));
});