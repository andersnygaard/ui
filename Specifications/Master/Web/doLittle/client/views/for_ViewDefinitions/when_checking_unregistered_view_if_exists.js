import { ViewDefinitions } from "doLittle/client/views/ViewDefinitions";
import { ViewPath } from "doLittle/client/views/ViewPath";

const path_to_view = "some/path/to/a/view";

describe("when checking if view exists", () => {

    let assetsManager = {
        exists: sinon.stub().returns(true)
    };
    let result = null;
    let viewPath = new ViewPath(path_to_view);


    beforeEach(() => {
        let viewDefinitions = new ViewDefinitions();
        (becauseOf => result = viewDefinitions.exists(viewPath))();
    });

    it("should not consider it to exist", () => result.should.be.false);
});