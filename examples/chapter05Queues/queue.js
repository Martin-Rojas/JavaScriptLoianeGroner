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
   dequeue() {}
   // get the front item
   peek() {}
   // Check if the queue it has items
   isEmpty() {}
   // Get the size of the Queue
   size() {}
}

export { Queue };
