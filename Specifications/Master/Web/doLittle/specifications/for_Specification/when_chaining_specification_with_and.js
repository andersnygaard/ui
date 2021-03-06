/*---------------------------------------------------------------------------------------------
 *  Copyright (c) 2008-2017 Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import {Specification} from "doLittle/specifications/SpecificationComposition";


describe("when chaining specification with and", () => {
    let first_evaluator = sinon.stub();
    let second_evaluator = sinon.stub();
    let first_specification = Specification.when(first_evaluator);

    let result = first_specification.and(second_evaluator);

    it("should return an and operator", () => result.constructor.name.should.equal("And"));
    it("should pass along the first_specifiction", () => result.left.should.equal(first_specification));
    it("should pass along the rule to the and operator", () => result.right.evaluator.should.equal(second_evaluator));
});