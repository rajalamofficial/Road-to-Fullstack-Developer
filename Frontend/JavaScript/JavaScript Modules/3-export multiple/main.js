import { Calculation, helloWorld, names } from "./modules.mjs";

const calculation = new Calculation(1, 2, 3, 4, 5);
console.log(calculation.plus());
console.log(calculation.minus());

const raj = ["Raj", "Alam"]
console.log(names.concat(raj));

console.log(helloWorld);