import { LinkedList } from "./LinkedList.js";

const list = new LinkedList();
console.log(list);

list.push(18);
console.log(list);

list.push(25);
console.log(list);

console.log("After the third node ");

list.push(38);
console.log(list);

console.log(`Size of the list ==> ${list.size()}`);

// console.log(list.insert(45, 2));
// console.log(list.insert(45, 0));
// console.log(list.insert(45, 1));
// console.log(list.insert(45, 3));
// console.log(list.insert(45, 2));
//console.log(list.insert(89, 5));
console.log(list.toString());

console.log(list.insert(89, 3));
console.log(list.insert(3, 4));
console.log(list.insert(31, 5));

console.log(`after the insertions`);
console.log(list.toString());

console.log(list.getElementAt(2));
console.log(list.getElementAt(8));
console.log(list.getElementAt(0));
console.log(list.getElementAt(4));
console.log(list.getElementAt(5));

console.log(`Test remove method`);
console.log(list.remove(18));
console.log(list.remove(38));
console.log(list.remove(3));
console.log(list.remove(31));
console.log(list.remove(380));
console.log(list.toString());

console.log(`Test indexOf method`);
list.push(98);
list.push(18);
list.push(77);
list.push(7);
console.log(list.indexOf(25));
console.log(list.indexOf(77));
console.log(list.toString());
