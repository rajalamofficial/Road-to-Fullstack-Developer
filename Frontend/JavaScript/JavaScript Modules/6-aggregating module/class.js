export class Person{
    constructor(name){
        this.name = name;
    }

    sayHello(name){
        console.log(`Hello ${name}, my name is ${this.name}`);
    }
}