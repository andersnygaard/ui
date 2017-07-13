/*---------------------------------------------------------------------------------------------
 *  Copyright (c) 2008-2017 doLittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import {ElementVisitor} from "../ElementVisitor";

export class View extends ElementVisitor
{
    visit(element, actions) {
        if( !element.localName || element.localName !== "view") return;
    }
}