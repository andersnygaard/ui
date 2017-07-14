import {View} from "doLittle/markup/visitors/View";
import Context from "./all_dependencies";

export default class extends Context
{
    constructor() {
        super();
        this.view = new View(this.actionFactory);
    }
}