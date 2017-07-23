import {ViewVisitor} from "doLittle/client/views/ViewVisitor";
import Context from "./all_dependencies";

export default class extends Context
{
    constructor() {
        super();
        this.visitor = new ViewVisitor(
            this.bindingContextManager, 
            this.regionManager, 
            this.viewDefinitions,
            this.viewLoader);
    }
}