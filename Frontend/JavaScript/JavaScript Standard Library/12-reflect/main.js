// reflect digunakan ketika kita ingin membuat, mengedit, menghapus properti & value 
// di dalam object tertentu tanpa menyentuh object nya langsung

const person = {};

Reflect.set(person, "firstName", "Marsha");
Reflect.set(person, "lastName", "Lenathea");

console.log(person);

console.log(Reflect.get(person, "firstName"));
console.log(Reflect.get(person, "lastName"));

console.log(Reflect.has(person, "firstName"));
console.log(Reflect.has(person, "middleName"));
console.log(Reflect.has(person, "lastName"));
 