import {ViewPath} from "doLittle/client/views/ViewPath";

const path = "Somplace/in/the/structure";

describe("when creating with path", () => {

    let viewPath = new ViewPath(path);

    it("should have the path on it as a property", () => viewPath.path.should.equal(path));
})