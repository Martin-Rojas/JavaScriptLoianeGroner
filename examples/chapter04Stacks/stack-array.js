class Stack {
   constructor() {
      this.items = [];
   }
   // Add item to the stack
   push(element) {
      this.items.push(element);
   }
   // Remove last item of the stack
   pop() {
      this.items.pop();
   }
   // Shows the top of Stack
   peek() {
      return this.items[this.items.length - 1];
   }
   // Checks if the Stack has items
   isEmpty() {
      return this.items.length === 0;
   }
   // Clear the Stack
   clear() {
      this.items = [];
   }
   // Return size of the Stack
   size() {
      return this.items.length;
   }
}

export { Stack };
