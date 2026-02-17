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
      if (this.count === 0) {
         this.head = newNode;
         this.tail = newNode;
      } else {
         newNode.prev = this.tail;
         this.tail.next = newNode;
         this.tail = newNode;
      }
      this.count++;
   }
   /* Insert a new element at a specific index.*/
   insert(element, position) {
      // Check for the bounds position
      if (position < 0 || position > this.count) {
         return "out-of-bounds";
      }
      const newNode = new DoublyNode(element);

      if (this.count === 0) {
         this.head = newNode;
         this.tail = newNode;
         this.count++;
         return true;
      }

      if (position === 0) {
         newNode.next = this.head;
         this.head.prev = newNode;
         this.head = newNode;
         this.count++;
         return true;
      }

      if (position === this.count) {
         this.tail.next = newNode;
         newNode.prev = this.tail;
         this.tail = newNode;
         this.count++;
         return true;
      }
      let currentNode = this.head;
      let index = 0;

      while (currentNode !== null) {
         if (index === position) {
            newNode.prev = currentNode.prev;
            newNode.next = currentNode;

            currentNode.prev.next = newNode;
            currentNode.prev = newNode;

            this.count++;
            return true;
         }
         currentNode = currentNode.next;
         index++;
      }
      return false;
   }
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
   toString() {
      let currentNode = this.head;
      let listString = ``;
      while (currentNode !== null) {
         listString += ` ${currentNode.value} ==> `;
         currentNode = currentNode.next;
      }
      return listString + ` NULL`;
   }
   /** Return string representation (reverse traversal using prev). */
   inverseToString() {}
}

export { DoublyLinkedList };
