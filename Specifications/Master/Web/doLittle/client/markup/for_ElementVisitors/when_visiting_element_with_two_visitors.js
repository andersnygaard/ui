import {ElementVisitors} from "doLittle/client/markup/ElementVisitors";

describe("when visiting element with two visitors", () => {
    let elementVisitors = null;
    let firstVisitor = { visit: sinon.stub() };
    let secondVisitor = { visit: sinon.stub() };
    let visitors = [firstVisitor, secondVisitor];
    const element = {name:"someElement"};

    beforeEach(() => {
        elementVisitors = new ElementVisitors(visitors);
        (becauseOf => elementVisitors.visit(element))();
    });

    it("should call the first visitor", () => firstVisitor.visit.calledWith(element).should.be.true);
    it("should call the second visitor", () => secondVisitor.visit.calledWith(element).should.be.true);
});