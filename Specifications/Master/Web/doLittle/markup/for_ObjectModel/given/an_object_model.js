import {ObjectModel} from "doLittle/markup/ObjectModel";
import all_dependenices from "./all_dependencies";

export default class extends all_dependenices
{
    constructor() {
        super();
        this.objectModel = new ObjectModel(
            this.document, 
            this.elementVisitors, 
            this.actionContextFactory, 
            this.actionsPerformer);
    }
}