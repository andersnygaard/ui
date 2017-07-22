/*---------------------------------------------------------------------------------------------
 *  Copyright (c) 2008-2017 doLittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

// IMPORTANT: This should be discovered by being able to take dependency to "instancesOfElementVisitor"
// the IOC will resolve it by convention and find implementations of it
// It will be a combination of a Babel plugin and IOC magic
import { ViewVisitor } from "doLittle/client/views/ViewVisitor"
import { BindingContextManager } from "doLittle/client/values/BindingContextManager";
import { RegionManager } from "doLittle/client/views/RegionManager";
import { ViewDefinitionManager } from "doLittle/client/views/ViewDefinitionManager";
import { ViewLoader } from "doLittle/client/views/ViewLoader";
import { AssetsManager } from "doLittle/client/assets/AssetsManager";

let elementVisitors = [];

elementVisitors.push(
    new ViewVisitor(
        new BindingContextManager(), 
        new RegionManager(), 
        new ViewDefinitionManager(new AssetsManager()), 
        new ViewLoader())
);

export default elementVisitors;