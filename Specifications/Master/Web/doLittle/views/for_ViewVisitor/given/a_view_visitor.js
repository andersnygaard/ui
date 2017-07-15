import {ViewVisitor} from "doLittle/views/ViewVisitor";
import Context from "./all_dependencies";

export default class extends Context
{
    constructor() {
        super();
        this.visitor = new ViewVisitor(this.actionFactory);
    }
}