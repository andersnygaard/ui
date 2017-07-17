/*---------------------------------------------------------------------------------------------
 *  Copyright (c) 2008-2017 Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import Context from "./given/an_undefined_scope";
import {SingletonScope} from "doLittle/dependencyInversion/Scopes/SingletonScope";
import {Binding} from "doLittle/dependencyInversion/Binding";

describe("when scoping to singleton", () => {
    let context = null;
    let binding = null;

    beforeEach(() => {
        context = new Context();

        (becauseOf => {
            context.scopeSyntax.asSingleton();
        })();
    });

    it("should set it to be the given scope", () => context.scopeSyntax.scope.should.be.instanceof(SingletonScope));
});