// set mirip seperti array & object tetapi value nya tidka bisa di duplikat
const set = new Set([1, 2, 3, 4, 4]);
set.add(10)

console.log(set);

let result = 0;
set.forEach(e => result += e);
console.log(result);
