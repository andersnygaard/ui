/*---------------------------------------------------------------------------------------------
 *  Copyright (c) 2008-2017 Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import {BindingSyntax} from "doLittle/dependencyInversion/BindingSyntax";
import {BindingTargetIsNotBasedOnFunction} from "doLittle/dependencyInversion/BindingTargetIsNotBasedOnFunction";
import * as Context from "./given/a_bound_service";

describe("when binding to type not being a function", () => {
    const type = "Some Constant";
    let context = null;
    let exception = null;
    
    beforeEach(() => {
        context = new Context();
        
        (becauseOf => {
            try { context.bindingSyntax.to(type) } catch(e) { exception = e }
        })();
    });

    it("should throw a binding target is not based on function exception", () => exception.should.be.instanceof(BindingTargetIsNotBasedOnFunction));
});