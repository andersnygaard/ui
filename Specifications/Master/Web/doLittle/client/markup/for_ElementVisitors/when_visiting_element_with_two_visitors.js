import {ElementVisitors} from "doLittle/client/markup/ElementVisitors";

describe("when visiting element with two visitors", () => {
    const element = {name:"someElement"};
    let elementVisitors = null;
    let firstVisitorFirstTask = { my:"firstVisitorFirstTask"};
    let firstVisitorSecondTask = { my:"firstVisitorSecondTask"};
    let secondVisitorFirstTask = { my:"secondVisitorFirstTask"};
    let secondVisitorSecondTask = { my:"secondVisitorSecondTask"};
    let firstVisitor = { visit: sinon.stub().returns([firstVisitorFirstTask, firstVisitorSecondTask]) };
    let secondVisitor = { visit: sinon.stub().returns([secondVisitorFirstTask, secondVisitorSecondTask]) };
    let visitors = [firstVisitor, secondVisitor];
    let result = null;
    
    beforeEach(() => {
        elementVisitors = new ElementVisitors(visitors);
        (becauseOf => result = elementVisitors.visit(element))();
    });

    it("should call the first visitor", () => firstVisitor.visit.calledWith(element).should.be.true);
    it("should call the second visitor", () => secondVisitor.visit.calledWith(element).should.be.true);
    it("should return tasks containing the first visitors first task", () => result.should.contain(firstVisitorFirstTask));
    it("should return tasks containing the first visitors second task", () => result.should.contain(firstVisitorSecondTask));
    it("should return tasks containing the second visitors first task", () => result.should.contain(secondVisitorFirstTask));
    it("should return tasks containing the second visitors second task", () => result.should.contain(secondVisitorSecondTask));
});