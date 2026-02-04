import Node from "./node.js";

export class Stack {
   constructor() {
      this.top = null;
      this.count = 0;
   }
   push(value) {
      const newNode = new Node(value);
      // NewNode has to point to current top
      newNode.next = this.top;
      // Top becomes the new node
      this.top = newNode;
      // Increment count
      this.count++;
   }
   pop() {
      if (this.top === null) {
         return undefined;
      } else {
         let removeNode = this.top;
         this.top = this.top.next;
         this.count--;
         return removeNode.value;
      }
   }
   peek() {
      return this.top.value;
   }
   isEmpty() {
      return this.count === 0 ? false : true;
   }
   size() {
      return this.count;
   }
   clear() {}
}
