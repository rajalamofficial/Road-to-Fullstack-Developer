import * as Mod from "./module.mjs";

const fullName = `${Mod.firstName} ${Mod.middleName} ${Mod.lastName}`;
console.log(fullName);

Mod.sayHello("Marsha");

const person = new Mod.Person("Marsha");
console.log(person);