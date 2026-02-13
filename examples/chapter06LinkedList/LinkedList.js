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
      this.count++;
   }
   /* Inserts a new element at a specified position in the list*/
   insert(element, position) {
      // Checks for bounds of the position
      if (position < 0 || position > this.count) {
         return "out-of-bounds";
      }
      const newNode = new Node(element);

      //Insert at head
      if (position === 0) {
         newNode.next = this.head;
         this.head = newNode;
      } else {
         let previous = this.head;
         let current = this.head;

         // Move to correct position
         for (let i = 0; i < position; i++) {
            previous = current;
            current = current.next;
         }

         previous.next = newNode;
         newNode.next = current;
      }
      this.count++;
      return true;
   }
   /* Return the element of a specific position in the list
       if the element does not exist in the list, it return undefined*/
   getElementAt(index) {
      // Check if the index is in-bound of the linked list
      if (index < 0 || index > this.count) {
         return undefined;
      }
      let currentNode = this.head;
      // Get the element from the list
      for (let i = 0; i < index; i++) {
         currentNode = currentNode.next;
      }

      return currentNode;
   }

   /* Removes an element from the list*/
   remove(element) {
      if (this.size() === 0) return false;

      // If head matches
      if (element === this.head.value) {
         this.head = this.head.next;
         this.count--;
         return true;
      }
      let previousNode = this.head;
      let currentNode = previousNode.next;

      while (currentNode !== null) {
         if (currentNode.value === element) {
            previousNode.next = currentNode.next;
            this.count--;
            return true;
         }
         previousNode = currentNode;
         currentNode = currentNode.next;
      }
      return false;
   }

   /* Returns the index of the element in the list. If element 
       does not exist return -1*/
   indexOf(element) {
      // Check empty list
      if (this.size() === 0) return -1;

      let currentNode = this.head;
      let index = 0;

      // Traverse the list and return the index
      while (currentNode !== null) {
         if (currentNode.value === element) {
            return index;
         }
         index++;
         currentNode = currentNode.next;
      }
      return -1;
   }

   /* Removes an item from a specified position in the list*/
   removeAt(position) {}

   /* Return the size of the list*/
   size() {
      return this.count;
   }

   toString() {
      let currentNode = this.head;
      let listString = ``;
      while (currentNode) {
         listString += ` ${currentNode.value} ==>`;
         currentNode = currentNode.next;
      }
      return listString + " null";
   }
}

export { LinkedList };
