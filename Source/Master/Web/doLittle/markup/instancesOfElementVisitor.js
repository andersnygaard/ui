// IMPORTANT: This should be discovered by being able to take dependency to "instancesOfElementVisitor"
// the IOC will resolve it by convention and find implementations of it
// It will be a combination of a Babel plugin and IOC magic
import { View } from "./visitors/View"

let elementVisitors = [];
elementVisitors.push(new View());

export default elementVisitors;