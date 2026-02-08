import Node from "./node.js";

class Queue {
   constructor() {
      this.front = null;
      this.count = 0;
      this.rear = null;
   }
   // Insert item from the back
   enqueue(value) {
      const newNode = new Node(value);
      if (this.front === null && this.rear === null) {
         this.front = newNode;
         this.rear = newNode;
      } else {
         this.rear.next = newNode;
         this.rear = newNode;
      }
      this.count++;
   }
   // Remove item from the front
   dequeue() {
      if (this.isEmpty()) {
         return undefined;
      }
      const removedItem = this.front;
      this.front = this.front.next;
      if (this.isEmpty()) {
         this.rear = null;
      }
      this.count--;
      return removedItem;
   }
   // get the front item
   peek() {
      return this.front ? this.front.value : undefined;
   }
   // Check if the queue it has items
   isEmpty() {
      return this.count === 0;
   }
   // Get the size of the Queue
   size() {
      return this.count;
   }
}

export { Queue };
