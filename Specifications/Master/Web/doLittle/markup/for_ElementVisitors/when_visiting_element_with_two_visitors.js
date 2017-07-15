import sinon from "sinon";
import {ElementVisitors} from "doLittle/markup/ElementVisitors";

describe("when visiting element with two visitors", () => {
    let elementVisitors = null;
    let actions = {my:"actions"};
    let results = {my:"results"};
    let firstVisitor = { visit: sinon.stub() };
    let secondVisitor = { visit: sinon.stub() };
    let visitors = [firstVisitor, secondVisitor];
    const element = {name:"someElement"};

    beforeEach(() => {
        elementVisitors = new ElementVisitors(visitors);
        (becauseOf => elementVisitors.visit(element, actions, results))();
    });

    it("should call the first visitor", () => firstVisitor.visit.calledWith(element, actions, results).should.be.true);
    it("should call the second visitor", () => secondVisitor.visit.calledWith(element, actions, results).should.be.true);
});