/*---------------------------------------------------------------------------------------------
 *  Copyright (c) 2008-2017 doLittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { View } from "./View";
import { ViewDefinition } from "./ViewDefinition";
import { ViewModel } from "./ViewModel";
import { NullViewModel } from "./NullViewModel";

/**
 * Represents a factory that is capable of creating {View} instances
 */
export class ViewFactory {

    /**
     * Create a {View} from a {ViewDefinition} and optional {View}
     * @param {Region} region The region in which the {View} instance belongs to
     * @param {ViewDefinition} viewDefinition The definition to create {View} from
     * @param {ViewModel} [viewModel] Optional {ViewModel} - if not specified a {NullViewModel} will be associated
     * @returns {View} An instance of a {View}
     */
    createFrom(region, viewDefinition, viewModel) {

    }
}