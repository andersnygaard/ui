/*---------------------------------------------------------------------------------------------
 *  Copyright (c) 2008-2017 Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import Context from "./given/an_empty_container";
import {MissingBindingForService} from "doLittle/dependencyInversion/MissingBindingForService"; 

describe("when getting binding for bound service", () => {
    const service = "Some service";
    let context = null;
    let exception = null;
    let result = null;
    const binding = {
        service: service,
        strategy: "Some strategy",
        scope: "Some scope"
    };

    beforeEach(() => {
        context = new Context();
        context.container.add(binding);

        (becauseOf => {
            result = context.container.getBindingFor(service);
        })();
    });

    it("should get the binding for the service", () => result.should.equal(binding));
});