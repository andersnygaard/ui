import {ElementVisitor} from "../ElementVisitor";

export class View extends ElementVisitor
{
    visit(element, actions) {
        if( !element.localName || element.localName !== "view") return;
    }
}