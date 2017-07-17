/*---------------------------------------------------------------------------------------------
 *  Copyright (c) 2008-2017 Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import Context from "./given/a_bound_service";

import {BindingSyntax} from "doLittle/dependencyInversion/BindingSyntax";
import {CallbackActivationStrategy} from "doLittle/dependencyInversion/Strategies/CallbackActivationStrategy";
import {ScopeSyntax} from "doLittle/dependencyInversion/ScopeSyntax";
import {TransientScope} from "doLittle/dependencyInversion/Scopes/TransientScope";
import {Binding} from "doLittle/dependencyInversion/Binding";

describe("when binding to callback", () => {
    const type = "Some Constant";
    let context = null;
    let scopeSyntax = null;
    let binding = null;
    
    beforeEach(() => {
        context = new Context();
        context.bindingSyntax.container.add = (input) => {
            binding = input;
        }; 
        
        (becauseOf => scopeSyntax = context.bindingSyntax.toCallback(() => {}))();
    });


    it("should set the correct constant activation strategy on the syntax", () => (context.bindingSyntax.strategy instanceof CallbackActivationStrategy).should.be.true);
    it("should set the scope syntax on the binding syntax", () => (context.bindingSyntax.scopeSyntax instanceof ScopeSyntax).should.be.true);
    it("should return a scope syntax", () => scopeSyntax.should.be.instanceof(ScopeSyntax));
    it("should add a binding to the container", () => binding.should.be.instanceof(Binding));
    it("should pass the service to the binding", () => binding.service.should.equal(context.bindingSyntax.service));
    it("should pass the strategy to the binding", () => binding.strategy.should.equal(context.bindingSyntax.strategy));
    it("should pass a transient scope to the binding", () => binding.scope.should.be.instanceof(TransientScope));
});