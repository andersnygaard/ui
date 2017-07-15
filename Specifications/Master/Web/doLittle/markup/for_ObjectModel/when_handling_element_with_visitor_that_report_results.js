import Context from "./given/an_object_model";

const errorMessage = "This is an error message";

describe("when handling element with visitor that report results", () => {
    let context = null;
    let element = {
        children: []
    };
    
    let result = null;

    beforeEach(() => {
        context = new Context();
        (becauseOf => result = context.objectModel.handle(element))();
    });

    it("should return the results", () => result.should.equal(context.results));
});