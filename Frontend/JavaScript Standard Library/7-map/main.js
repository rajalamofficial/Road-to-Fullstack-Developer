// map mirip seperti object
const person = new Map();
person.set("firstName", "Raj");
person.set("lastName", "Alam");

console.log(person);
console.log(person.get("firstName"));
console.log(person.get("lastName"));

for(const element of person){
    console.log(`Key: ${element[0]} Value: ${element[1]}`);
}

person.forEach((value, key) => console.log(`Key: ${key} Value: ${value}`))