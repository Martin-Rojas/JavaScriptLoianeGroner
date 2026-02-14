import { LinkedList } from "./LinkedList.js";
import DoublyNode from "./DoublyNode.js";

class DoublyLinkedList extends LinkedList {
   constructor() {
      super();
      this.tail = null;
   }

   /* Insert a new element at the end (tail) of the list.*/
   push(element) {
      const newNode = new DoublyNode(element);
      if (this.count === null) {
         this.head = newNode;
         this.tail = newNode;
      } else {
         this.tail.next = newNode;
         newNode.prev = this.tail;
         this.tail = newNode;
      }
      this.count++;
   }
   /* Insert a new element at a specific index.*/
   insert(element, position) {}
   /* Remove a node at a specific index.*/
   removeAt(position) {}
   /* Remove first occurrence of an element.*/
   remove(element) {}
   /* Return the index of the first matching element.*/
   indexOf(element) {}
   /* Return the node at a specific index.*/
   getElementAt(index) {}
   /* Check if the list is empty.*/
   isEmpty() {}

   /* Return number of elements.*/
   size() {}
   /* Remove all elements.*/
   clear() {}
   /* Return string representation (forward traversal).*/
   toString() {}
   /** Return string representation (reverse traversal using prev). */
   inverseToString() {}
}

export { DoublyLinkedList };
