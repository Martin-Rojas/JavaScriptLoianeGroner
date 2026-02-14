import Node from "./Node.js";

export default class DoublyNode extends Node {
   constructor(element = null) {
      super(element);
      this.prev = null;
   }
}
