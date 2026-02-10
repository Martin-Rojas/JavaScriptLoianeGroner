import Node from "./Node.js";

class LinkedList {
   constructor() {
      this.count = 0;
      this.head = null;
   }
   /* Add a new element to the end of the list*/
   push(element) {
      const newNode = new Node(element);
      if (this.head === null) {
         this.head = newNode;
      } else {
         // Set the beginning of the linked list
         let currentNode = this.head;
         // Traverse the list until the end
         while (currentNode.next) {
            currentNode = currentNode.next;
         }
         // Link the last node to new node
         currentNode.next = newNode;
         console.log(currentNode);
      }
   }
}

export { LinkedList };
