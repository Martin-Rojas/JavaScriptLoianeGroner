//import { Stack } from "./stack-array.js";
import { Stack } from "./stack.js";
// const stack = new Stack();

// console.log(stack.isEmpty());

// stack.push(5);
// stack.push(8);

// console.log(stack.peek());
// stack.push(11);

// console.log(stack.size());
// console.log(stack.isEmpty());

// stack.push(15);
// stack.pop();
// stack.pop();

// console.log(stack.size());

const stack = new Stack();

console.log(`the Stack is empty::: ${stack.isEmpty()}`);
stack.push(18);
stack.push(25);
stack.push(30);
console.log(stack.peek());
console.log(stack.size());
console.log(stack);

console.log(`node removed ==> ${stack.pop()}`);

console.log("After the first pop " + stack.peek());
console.log("After the first pop " + stack.size());
console.log(stack);
console.log(`the Stack is empty::: ${stack.isEmpty()}`);

console.log(stack.toString());
stack.push(30);
stack.push(19);
stack.push(98);
console.log(stack.toString());
