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
