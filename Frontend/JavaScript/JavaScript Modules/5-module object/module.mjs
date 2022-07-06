const firstName = "Marsha";
const middleName = "Lenathea";
const lastName = "Lavia";

function sayHello(name){
    console.log(`Hello ${name}`);
}

class Person{
    constructor(name){
        this.name = name;
    }
}

export { firstName, middleName, lastName, sayHello, Person }