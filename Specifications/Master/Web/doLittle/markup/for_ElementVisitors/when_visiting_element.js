import {ElementVisitors} from "doLittle/markup/ElementVisitors";

describe("when visiting element", () => {
    let visitors = null;
    let actions = {};
    const element = {name:"someElement"};

    beforeEach(() => {
        visitors = new ElementVisitors();
        (becauseOf => visitors.visit(element, actions))();
    });
});