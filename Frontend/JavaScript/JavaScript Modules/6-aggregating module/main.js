import { Person, calculation, firstName, middleName, lastName } from "./aggregating.mjs";

const person = new Person('Raj');
person.sayHello("Marsha");

calculation(10, 5, 5, 4);

const fullName = `${firstName} ${middleName} ${lastName}`;
console.log(fullName)